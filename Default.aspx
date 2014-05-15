<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>
<%@ Register TagPrefix="uc" TagName="head" Src="~/controls/head.ascx" %>
<%@ Register TagPrefix="uc" TagName="includedScripts" Src="~/controls/includedScripts.ascx" %>
<%@ Register TagPrefix="uc" TagName="googleAnalytics" Src="~/controls/googleAnalytics.ascx" %>
<!doctype html>

<!--[if IE 8]><html class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <title>Commercial Real Estate Website Design and Development</title>
    <meta name="description" content="">
    <uc:head runat="server" ID="ucHead" />    
</head>
<body>
    <!--[if lt IE 7]>
        <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <div id="page-wrapper">
        <header id="hdr-main">
            <div class="container">
                <h1 id="masthead"><a href="/"><img src="<%= (New SI_UTIL).getImg("img/logos/select-interactive-200w.webp", "png")%>" width="200" height="60" alt="Select Interactive" /></a></h1>
                <nav id="nav-main" role="navigation">
                    <ul>
                        <li><a href="#">Components</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li class="break"></li>
                        <li class="no-bars">T. <a href="tel:817.210.4303">817.210.4303</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <div id="content-wrapper" class="home" role="main">
            <div class="container-full-width container-vert-padding container-bg-city">
                <div class="copy copy-narrow text-center">
                    <h2 class="heading heading-primary">Why does your property<br />need a website?</h2>
                    <h3 class="heading heading-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tempus ante. Morbi gravida mollis posuere. Vivamus eu lacus hendrerit, aliquam neque et, pulvinar justo. Praesent vitae bibendum metus.</h3>
                </div>
            </div>
            <div class="container-full-width container-vert-padding container-bg-gray container-cols-3">
                <div class="copy">
                    <div class="col">
                        <div class="text-center">
                            <i class="fa fa-refresh fa-3x fa-alone"></i>
                            <h3 class="heading heading-secondary">Experience</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada semper mi, id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.</p>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <i class="fa fa-pencil-square-o fa-3x fa-alone"></i>
                            <h3 class="heading heading-secondary">Design</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada semper mi, id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.</p>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <i class="fa fa-code fa-3x fa-alone"></i>
                            <h3 class="heading heading-secondary">Engineering</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit fusce vel sapien elit in malesuada semper mi, id sollicitudin urna fermentum ut fusce varius nisl ac ipsum gravida vel pretium tellus.</p>
                    </div>
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
                    <div class="copy text-center">
                        <a href="#" class="btn btn-action">See Our Work</a>
                    </div>
                </div>
            </div>
            <div class="container-full-width container-vert-padding container-bg-city container-bg-austin">
                <div class="copy copy-med text-center">
                    <h3 class="heading heading-secondary">A Website Development Firm<br />That Knows Commercial Real Estate</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et tempus ante. Morbi gravida mollis posuere. Vivamus eu lacus hendrerit, aliquam neque et, pulvinar justo. Praesent vitae bibendum metus. Ut gravida sapien sapien, quis feugiat erat tincidunt et. Morbi quis tincidunt justo. Suspendisse quis scelerisque mi, eget ultrices enim. Vestibulum eget nisi facilisis, accumsan dui ac, aliquam leo.</p>
                </div>
            </div>
        </div>
        <footer id="footer-main" class="container-full-width container-vert-padding container-bg-gray-dark container-cols-3">
            <div class="container-1000">
                <div class="col">
                    <h4 class="heading heading-basic color-si-orange">Connect</h4>
                    <ul class="list-basic">
                        <li>T. <a href="tel:817.210.4303">817.210.4303</a></li>
                        <li><a href="mailto:contact@select-interactive.com">contact@select-interactive.com</a></li>
                        <li>3343 Locke Ave.<br />Suite 107<br />Fort Worth, TX 76107</li>
                        <li>
                            <a href="https://twitter.com/" class="fa fa-twitter"></a>
                            <a href="https://www.facebook.com/SelectInteractive" class="fa fa-facebook-square"></a>
                            <a href="https://plus.google.com/+Select-interactive/posts" class="fa fa-google-plus"></a>
                            <a href="http://g.co/maps/529t3" target="_blank" class="fa fa-map-marker"></a>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h4 class="heading heading-basic color-si-orange">Something About Nav Here</h4>
                    <ul class="list-basic list-arrows">
                        <li><a href="/">Components</a></li>
                        <li><a href="/">Our Work</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col">
                    <p>&copy; <%= Year(Now)%> Select Interactive, LLC. All rights reserved.</p><p>Founded by <a href="mailto:jeremy@select-interactive.com">Jeremy Burton</a> and <a href="mailto:danh@select-interactive.com">Dan Harris</a>.</p>
                </div>
            </div>
        </footer>
    </div>

    <uc:includedScripts runat="server" ID="ucIncludedScripts" />
    <uc:googleAnalytics runat="server" ID="ucGoogleAnalytics" />
</body>
</html>