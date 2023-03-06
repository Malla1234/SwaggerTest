import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export const SwaggerComponent = () => {
  
  return (
    <div>
      <SwaggerUI
        url="https://petstore.swagger.io/v2/swagger.json"
        docExpansion="none"
        defaultModelExpandDepth={1}
        supportedSubmitMethods={["get", "post", "put"]}
        requestInterceptor={(request) => {
          request.headers["Authorization"] = "Bearer ";
          return request;
        }}
      />
    </div>
  );
}
  