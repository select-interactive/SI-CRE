<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>
<%@ Register TagPrefix="uc" TagName="head" Src="~/controls/head.ascx" %>
<%@ Register TagPrefix="uc" TagName="header" Src="~/controls/header.ascx" %>
<%@ Register TagPrefix="uc" TagName="footer" Src="~/controls/footer.ascx" %>
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
        <uc:header runat="server" ID="ucHeader" />
        <div id="content-wrapper" class="home" role="main">
            <div class="container-full-width container-vert-padding container-bg-city">
                <div class="slides">
                    <div class="slide slide-center">
                        <div class="copy copy-narrow text-center">
                            <h2 class="heading heading-primary">Why does your building<br />need a website?</h2>
                            <h3 class="heading heading-subtitle">It&rsquo;s the first impression potential tenants or buyers have of the property before they set foot on it. As an owner or marketing representative of a commercial real estate property, what does your website communicate about your asset? Are you trying to attract new tenants? Provide a portal to service your existing tenants? Are you looking to present your property to prospective buyers?</h3>
                        </div>
                    </div>
                    <div class="slide slide-right">
                        <div class="copy copy-narrow text-center">
                            <h2 class="heading heading-primary">Effectively communicate your message.</h2>
                            <h3 class="heading heading-subtitle">Your site needs to kept be up-to-date and designed for ease-of-access from any device and location. Select Interactive specializes in developing custom content management systems (CMS) giving you the ability easily update your site&rsquo;s content and data from anywhere.</h3>
                        </div>
                    </div>
                    <div class="slide slide-right">
                        <div class="copy copy-narrow text-center">
                            <h2 class="heading heading-primary">Reach your potential viewers.</h2>
                            <h3 class="heading heading-subtitle">Search engine optimization (SEO) is a must to reach your maximum audience via Google, Bing, and Yahoo. Websites should be developed with search engine &ldquo;Best Practices&rdquo; from day one to ensure successful visibilty in search results. Your site should also be easily accessible on any device, from phone to PC. It should be implemented with a responsive web design strategy to support a multi-device world.</h3>
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
                        <p>When selecting a web development firm, it&rsquo;s imperative for you to work with a company that understands your business. Select Interactive developers have been involved in both commercial and residential real estate projects dating back to the 1990&rsquo;s. We have the experience in and knowledge of the industry that allows us to work seamlessly with building owners, leasing teams, and marketing teams.</p>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <i class="fa fa-pencil-square-o fa-3x fa-alone"></i>
                            <h3 class="heading heading-secondary">Design</h3>
                        </div>
                        <p>A good design is critical to successfully communicate the essential information of your asset. Select Interactive can create a custom design based upon an extensive evaluation of your unique needs. We can work with your marketing team to present a high quality, professional representation of your overall marketing plan for the web.</p>
                    </div>
                    <div class="col">
                        <div class="text-center">
                            <i class="fa fa-code fa-3x fa-alone"></i>
                            <h3 class="heading heading-secondary">Engineering</h3>
                        </div>
                        <p>Select Interactive engineers develop sites using the latest web technologies, giving us the ability to ensure your site loads quickly and functions consistently across all devices. We are engineers first, and are widely regarded as experts in the development community. We know how to implement the most creative designs, without sacrificing performance or usability.</p>
                    </div>
                </div>
            </div>
            <div class="container-full-width container-vert-padding container-bg-city container-bg-austin">
                <div class="copy copy-med text-center text-larger">
                    <h3 class="heading heading-secondary">A Website Development Firm<br />That Knows Commercial Real Estate</h3>
                    <p >Select Interactive specializes in the design and development of commercial real estate projects. Our team specializes in designs that clearly communicate your message to your target audience. Our engineers understand how viewers interact with the information on your site, and excel at implementing the best user experience possible.</p>
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
        </div>
        <uc:footer runat="server" ID="ucFooter" />
    </div>

    <uc:includedScripts runat="server" ID="ucIncludedScripts" />
    <uc:googleAnalytics runat="server" ID="ucGoogleAnalytics" />
</body>
</html>