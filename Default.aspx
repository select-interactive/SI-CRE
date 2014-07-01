<%@ Page Title="" Language="VB" MasterPageFile="~/masterpages/standard-blank.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" Runat="Server">
    <title>Commercial Real Estate Website Design and Development</title>
    <meta name="description" content="Select Interactive is a web development firm that specializes and the design and development of commercial real estate web projects.">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="cphHead" Runat="Server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphContent" Runat="Server">
    <div class="container-full-width container-vert-padding container-no-hor-padding container-bg-city eq-height">
        <div class="slides slides-auto eq-height-item">
            <div class="slide slide-center eq-height-item">
                <div class="copy copy-narrow text-center">
                    <asp:Literal runat="server" ID="ltrlModuleSlide1" />
                </div>
            </div>
            <div class="slide slide-right eq-height-item">
                <div class="copy copy-narrow text-center">
                    <asp:Literal runat="server" ID="ltrlModuleSlide2" />
                </div>
            </div>
            <div class="slide slide-right eq-height-item">
                <div class="copy copy-narrow text-center">
                    <asp:Literal runat="server" ID="ltrlModuleSlide3" />
                </div>
            </div>
            <a href="#" id="slide-btn-prev" class="slides-arrows slides-arrows-prev"></a>
            <a href="#" id="slide-btn-next" class="slides-arrows slides-arrows-next"></a>
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-gray container-cols-3">
        <div class="copy">
            <div class="col">
                <div class="text-center">
                    <i class="fa fa-refresh fa-3x fa-alone"></i>
                    <h3 class="heading heading-secondary">Experience</h3>
                </div>
                <asp:Literal runat="server" ID="ltrlModuleExperience" />
            </div>
            <div class="col">
                <div class="text-center">
                    <i class="fa fa-pencil-square-o fa-3x fa-alone"></i>
                    <h3 class="heading heading-secondary">Design</h3>
                </div>
                <asp:Literal runat="server" ID="ltrlModuleDesign" />
            </div>
            <div class="col">
                <div class="text-center">
                    <i class="fa fa-code fa-3x fa-alone"></i>
                    <h3 class="heading heading-secondary">Engineering</h3>
                </div>
                <asp:Literal runat="server" ID="ltrlModuleEngineering" />
            </div>
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-city container-bg-austin">
        <div class="copy copy-med text-center text-larger">
            <asp:Literal runat="server" ID="ltrlModuleSummary" />
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-gray-light">
        <div class="container">
            <div class="projects">
                <div class="project">
                    <a href="http://www.regionsplaza.com" target="_blank">
                        <div class="project-img">
                            <div class="project-overlay"><span class="project-overlay-msg">View Project</span></div>
                            <img src="//static.select-interactive.com/CRE/img/projects/thumbs/regions-plaza.v1.jpg" />
                        </div>
                        <h3 class="project-name">Regions Plaza</h3>
                        <div class="project-location">Atlanta, GA</div>
                    </a>
                </div>
                <div class="project">
                    <a href="http://www.trammellcrowcenter.com" target="_blank">
                        <div class="project-img">
                            <div class="project-overlay"><span class="project-overlay-msg">View Project</span></div>
                            <img src="//static.select-interactive.com/CRE/img/projects/thumbs/trammell-crow-center.v1.jpg" />
                        </div>
                        <h3 class="project-name">Trammell Crow Center</h3>
                        <div class="project-location">Dallas, TX</div>
                    </a>
                </div>
                <div class="project">
                    <a href="http://www.bbvacompassplaza.com" target="_blank">
                        <div class="project-img">
                            <div class="project-overlay"><span class="project-overlay-msg">View Project</span></div>
                            <img src="//static.select-interactive.com/CRE/img/projects/thumbs/bbva-compass-plaza.v1.jpg" />
                        </div>
                        <h3 class="project-name">BBVA Compass Plaza</h3>
                        <div class="project-location">Houston, TX</div>
                    </a>
                </div>
                <div class="project">
                    <a href="http://www.lenoxtowersbuckhead.com" target="_blank">
                        <div class="project-img">
                            <div class="project-overlay"><span class="project-overlay-msg">View Project</span></div>
                            <img src="//static.select-interactive.com/CRE/img/projects/thumbs/lenox-towers.v1.jpg" />
                        </div>
                        <h3 class="project-name">Lenox Towers Buckhead</h3>
                        <div class="project-location">Atlanta, GA</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="cphJS" Runat="Server">
</asp:Content>