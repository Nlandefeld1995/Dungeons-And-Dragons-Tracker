const myHeaders = () => {
    var headers = new Headers();
    headers.append("Content-Type", "application/json; charset=UTF-8");
    const requestOptions: any = {
      headers: headers,
      redirect: "follow",
    };
    return requestOptions;
  };
  const applicationId = "Ick76uw7eeBOumQ2QbiZFXWJkOo1J51BFR8XvGZr"
  const jsKey = "6Cqkpr5Ji3UDBZqBaMoOhyRdecxx1btwhliTrvls"
  // https://www.back4app.com/docs/react-native/parse-sdk/react-native-sdk
  export const getRequest = async (url: string) => {
    let requestOptions = myHeaders();
    requestOptions.method = "GET";
    let response = await fetch(url, requestOptions);
    return response.json().then(async (data: any) => {
      return data;
    });
  };
  
  export const postRequest = async (url: string, body: any) => {
    let requestOptions = myHeaders();
    requestOptions.method = "POST";
    requestOptions.body = JSON.stringify(body);
    let response = await fetch(url, requestOptions);
    return response.json().then(async (data: any) => {
      return data;
    });
  };
  
  export const deleteRequest = async (url: string) => {
    let requestOptions = myHeaders();
    requestOptions.method = "DELETE";
    return await fetch(url, requestOptions);
  };
  
  export const putRequest = async (url: string, body: any) => {
    let requestOptions = myHeaders();
    requestOptions.method = "PUT";
    requestOptions.body = JSON.stringify(body);
    let response = await fetch(url, requestOptions);
    return response.json().then(async (data: any) => {
      return data;
    });
  };
  