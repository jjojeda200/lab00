import React from "react";
import ReactDOM from "react-dom";
import GaleriaDeImagenes from "./pi05"
import MultiStateComponent from "./pi08"
import { VideoComp } from "./pi09";


const galeria = ReactDOM.createRoot(document.getElementById("galeria"));
const multicomp = ReactDOM.createRoot(document.getElementById("multicomp"));
const video = ReactDOM.createRoot(document.getElementById("video"));


galeria.render(<GaleriaDeImagenes />);
multicomp.render(<MultiStateComponent />);
video.render(<VideoComp />);