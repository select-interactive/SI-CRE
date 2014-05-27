<%@ Page Title="" Language="VB" MasterPageFile="~/masterpages/standard-blank.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="components_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" Runat="Server">
    <title>Commercial Real Estate Website Features</title>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="cphHead" Runat="Server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphContent" Runat="Server">
    <div class="container-full-width container-vert-padding">
        <img class="container-img-primary-right" src="<%= (New SI_UTIL).getImg("CRE/img/components/components-header.v1.webp", "png") %>" width="785" height="612" alt="Commercial Real Estate Property Availabilities" />
        <div class="container">
            <h2 class="heading heading-primary">Components of Commercial Real Estate Property Websites</h2>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
            <ul class="list-action-links">
                <li><a href="#">Availabilities</a></li>
                <li><a href="#">Photo Galleries</a></li>
                <li><a href="#">Amenities</a></li>
                <li><a href="#">Location Overview</a></li>
                <li><a href="#">Something Else</a></li>
            </ul>
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-gray-light container-cols-2 eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Available Space</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides slides-availabilities text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/regions-plaza.v1.webp", "png")%>" />
            </div>
            <div class="slide slide-right eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/lenox-towers.v1.webp", "png")%>" />
            </div>
            <div class="slide slide-right eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/bbva-compass-plaza.v1.webp", "png")%>" />
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-gray container-cols-2 eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Photo Galleries</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides slides-availabilities text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/regions-plaza.v1.webp", "png")%>" />
            </div>
            <div class="slide slide-right eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/bbva-compass-plaza.v1.webp", "png")%>" />
            </div>
            <div class="slide slide-right eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/satellite-place.v1.webp", "png")%>" />
            </div>
            <div class="slide slide-right eq-height-item">
                <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/trammell-crow-center.v1.webp", "png")%>" />
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="cphJS" Runat="Server">
</asp:Content>