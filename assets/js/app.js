/*let $ = require('jquery');*/

import '../css/style.css';
import '../css/normalize.css';
import $ from "jquery";
import gNews from './gNews';
import "babel-polyfill";

/*const socialNewsURL =
  "https://newsapi.org/v2/everything?q=social&pageSize=6&apiKey=";
const entertainmentNewsURL =
  "https://newsapi.org/v2/everything?q=entertainment&pageSize=6&apiKey=";
const sportNewsURL =
  "https://newsapi.org/v2/everything?q=sport&pageSize=6&apiKey=";
const taiwanNewsURL =
  "https://newsapi.org/v2/everything?q=taiwan&pageSize=6";*/


import {newsTemplate} from './templates';

const getSocialNews = async () => {
	try {
	  let resp = await gNews("/everything?q=social");
	  let newsList = resp.data.articles.map(news => newsTemplate(news));
	  $("#socialNews").html(newsList);
	} catch (error) {
	  console.log(error);
	}
  };
  
  const getEntertainmentNews = async () => {
	try {
	  let resp = await gNews("/everything?q=entertainment");
	  let newsList = resp.data.articles.map(news => newsTemplate(news));
	  $("#entertainmentNews").html(newsList);
	} catch (error) {
	  console.log(error);
	}
  };
  
  const getTaiwanNews = async () => {
	try {
	  let resp = await gNews("/everything?q=taiwan");
	  let newsList = resp.data.articles.map(news => newsTemplate(news));
	  $("#taiwanNews").html(newsList);
	} catch (error) {
	  console.log(error);
	}
  };
  
  const getSportNews = async () => {
	try {
	  let resp = await gNews("/everything?q=sport");
	  let newsList = resp.data.articles.map(news => newsTemplate(news));
	  $("#sportNews").html(newsList);
	} catch (error) {
	  console.log(error);
	}
  };

getSocialNews();
getEntertainmentNews();
getSportNews();
getTaiwanNews();