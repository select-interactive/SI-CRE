<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>
<%@ Register TagPrefix="uc" TagName="head" Src="~/controls/head.ascx" %>
<%@ Register TagPrefix="uc" TagName="includedScripts" Src="~/controls/includedScripts.ascx" %>
<%@ Register TagPrefix="uc" TagName="googleAnalytics" Src="~/controls/googleAnalytics.ascx" %>
<!doctype html>

<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title></title>
    <meta name="description" content="">
    <uc:head runat="server" ID="ucHead" />    
</head>
<body>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div id="page-wrapper">
        <header></header>
        <nav role="navigation"></nav>
        <div id="content-wrapper" role="main">

        </div>
        <footer></footer>
    </div>

    <uc:includedScripts runat="server" ID="ucIncludedScripts" />
    <uc:googleAnalytics runat="server" ID="ucGoogleAnalytics" />
</body>
</html>