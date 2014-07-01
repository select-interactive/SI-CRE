<%@ Control Language="VB" AutoEventWireup="false" CodeFile="header.ascx.vb" Inherits="controls_header" %>
<%@ Register TagPrefix="uc" TagName="nav" Src="~/controls/navMain.ascx" %>
<header id="hdr-main">
    <div class="container">
        <h1 id="masthead"><a href="/">
            <picture>
                <!--[if IE 9]><video style="display: none;"><![endif]-->
	            <source srcset="<%= (New SI_UTIL).getImg("img/logos/select-interactive-200w.webp", "png")%>" media="(min-width:1024px)">
                <!--[if IE 9]></video><![endif]-->
                <img src="<%= (New SI_UTIL).getImg("img/logos/select-interactive-s.webp", "png")%>" alt="Select Interactive" /></a></h1>
            </picture>
        <uc:nav runat="server" ID="ucNavMain" />
    </div>
</header>