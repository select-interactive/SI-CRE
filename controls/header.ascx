<%@ Control Language="VB" AutoEventWireup="false" CodeFile="header.ascx.vb" Inherits="controls_header" %>
<%@ Register TagPrefix="uc" TagName="nav" Src="~/controls/navMain.ascx" %>
<header id="hdr-main">
    <div class="container">
        <h1 id="masthead"><a href="/"><img src="<%= (New SI_UTIL).getImg("img/logos/select-interactive-200w.webp", "png")%>" width="200" height="60" alt="Select Interactive" /></a></h1>
        <uc:nav runat="server" ID="ucNavMain" />
    </div>
</header>