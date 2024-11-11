import http from "../axios/http";

const getPoetry = () => {
  return http.get("/poetry");
};

export
{
    getPoetry
}