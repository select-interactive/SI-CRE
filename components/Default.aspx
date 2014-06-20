<%@ Page Title="" Language="VB" MasterPageFile="~/masterpages/standard-blank.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="components_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" Runat="Server">
    <title>Commercial Real Estate Website Features</title>
    <meta name="description" content="Common components built into commercial real estate property websites.">
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
                <li><a href="#space">Availabilities</a></li>
                <li><a href="#gallery">Photo Galleries</a></li>
                <li><a href="#amenities">Amenities</a></li>
                <li><a href="#ingress-egress">Ingress/Egress</a></li>
                <%--<li><a href="#location">Location Overview</a></li>--%>
            </ul>
        </div>
    </div>
    <div id="space" class="container-full-width container-vert-padding container-bg-gray-light eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Available Space</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides slides-availabilities text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <a class="slide-component" href="http://www.regionsplaza.com/availabilities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/regions-plaza.v1.webp", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.lenoxtowersbuckhead.com/availabilities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/lenox-towers.v1.webp", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.bbvacompassplaza.com/space/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/availabilities/bbva-compass-plaza.v1.webp", "png")%>" />
                </a>
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <div id="gallery" class="container-full-width container-vert-padding container-bg-gray eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Photo Galleries</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides slides-availabilities text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <a class="slide-component" href="http://www.regionsplaza.com/experience/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/regions-plaza.v1.webp", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.bbvacompassplaza.com/gallery/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/bbva-compass-plaza.v1.webp", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.satellite-place.com/gallery/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/satellite-place.v1.webp", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.trammellcrowcenter.com/gallery/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/photo/trammell-crow-center.v1.webp", "png")%>" />
                </a>
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <div id="amenities" class="container-full-width container-vert-padding container-bg-gray-light eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Property Amenities</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <a class="slide-component" href="http://www.trammellcrowcenter.com/amenities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/trammell-crow-center.v1.png", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.satellite-place.com/amenities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/satellite-place.v1.png", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.upaustin.com/amenity/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/university-park.v1.png", "png")%>" />
                </a>
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <div id="ingress-egress" class="container-full-width container-vert-padding container-bg-gray eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Ingress/Egress</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <a class="slide-component" href="http://www.regionsplaza.com/map/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/ingress-egress/regions-plaza.v1.png", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.trammellcrowcenter.com/location/" target="_blank">
                    <div class="slide-component-overlay slide-component-overlay-white"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/ingress-egress/trammell-crow-center.v1.png", "png")%>" />
                </a>
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <%--<div id="location" class="container-full-width container-vert-padding container-bg-light-dark eq-height">
        <div class="copy copy-narrow text-center">
            <h3 class="heading heading-secondary">Location Overview</h3>
            <p>Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.</p>
        </div>
        <div class="slides text-center eq-height-item">
            <div class="slide slide-center eq-height-item">
                <a class="slide-component" href="http://www.trammellcrowcenter.com/amenities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/trammell-crow-center.v1.png", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.satellite-place.com/amenities/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/satellite-place.v1.png", "png")%>" />
                </a>
            </div>
            <div class="slide slide-right eq-height-item">
                <a class="slide-component" href="http://www.upaustin.com/amenity/" target="_blank">
                    <div class="slide-component-overlay"><span class="slide-component-label">View Project</span></div>
                    <img src="<%= (New SI_UTIL).getImg("CRE/img/components/amenities/university-park.v1.png", "png")%>" />
                </a>
            </div>
            <a href="#" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>--%>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="cphJS" Runat="Server">
</asp:Content>