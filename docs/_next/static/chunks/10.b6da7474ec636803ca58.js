(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{fop3:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return d}));var r=o("q1tI"),n=o.n(r).a.createElement;function d(){var e=function(){window.localStorage.setItem("pith-color-mode","dark"),document.documentElement.style.setProperty("--background-color","var(--dark-dark)"),document.documentElement.style.setProperty("--reading-color","var(--mid-dark)"),document.documentElement.style.setProperty("--heading-text","var(--mid-light)"),document.documentElement.style.setProperty("--body-text","var(--dark-light)"),document.documentElement.style.setProperty("--logo-color","var(--light-light)")},t=function(){window.localStorage.setItem("pith-color-mode","light"),document.documentElement.style.setProperty("--background-color","var(--mid-light)"),document.documentElement.style.setProperty("--reading-color","var(--light-light)"),document.documentElement.style.setProperty("--heading-text","var(--mid-dark)"),document.documentElement.style.setProperty("--body-text","var(--mid-dark)"),document.documentElement.style.setProperty("--logo-color","var(--black)")},o=window.localStorage.getItem("pith-color-mode");if("dark"===o)e();else if("light"===o)t();else{window.matchMedia("(prefers-color-scheme: dark)").matches?e():t()}return n("div",null,n("div",{id:"light-square",onClick:function(){return t()}}),n("div",{id:"dark-square",onClick:function(){return e()}}))}}}]);