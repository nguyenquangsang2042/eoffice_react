import axios from 'axios';
import ApiConfig from '../services/AppConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SOAP_AUTH_URL = `${ApiConfig.getBaseUrl()}/_vti_bin/authentication.asmx`;

const generateAuthSOAPRequest = (
  username: string,
  password: string,
): string => {
  return `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <Login xmlns="http://schemas.microsoft.com/sharepoint/soap/">
            <username>${username}</username>
            <password>${password}</password>
          </Login>
        </soap:Body>
      </soap:Envelope>`;
};

export const performSOAPAuthentication = async (
  username: string,
  password: string,
) => {
  const soapRequest = generateAuthSOAPRequest(username, password);
  console.log(SOAP_AUTH_URL);
  try {
    const response = await axios.post(SOAP_AUTH_URL, soapRequest, {
      headers: {
        'Content-Type': 'text/xml',
        SOAPAction: 'http://schemas.microsoft.com/sharepoint/soap/Login',
      },
    });
    // Extract the "FedAuth" token from the response headers
    const fedAuth =
      response.headers?.['set-cookie']?.find((cookie: string) =>
        cookie.startsWith('FedAuth'),
      ) ?? '';

    if (fedAuth) {
      console.log(fedAuth);
      await AsyncStorage.setItem('set-cookie', fedAuth);
      return true;
    }
    console.log('SOAP Response:', response.data);
  } catch (error) {
    console.error('SOAP Authentication Error:', error);
    return false;
  }
};
