import http from "../axios/http";

const getSentences = () => {
  return http.get("/sentences");
};

export
{
  getSentences
}