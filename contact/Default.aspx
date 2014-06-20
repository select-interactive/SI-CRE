<%@ Page Title="" Language="VB" MasterPageFile="~/masterpages/standard-blank.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="contact_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" Runat="Server">
    <title>Contact Select Interactive Commercial Real Estate Web Division</title>
    <meta name="description" content="Get in touch with Select Interactive today to learn more about our development process.">
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="cphHead" Runat="Server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphContent" Runat="Server">
    <div class="container-full-width container-vert-padding container-bg-city">
        <div class="copy copy-narrow text-center">
            <h2 class="heading heading-primary">Contact Us</h2>
            <h3 class="heading heading-subtitle">Call us at <a href="tel:817.210.4303.">817.210.4303</a> or fill out the form below to get in touch.</h3>
        </div>
    </div>
    <div class="container-full-width container-vert-padding container-bg-white container-cols-2">
        <div class="container copy eq-height">
            <div class="col eq-height-item">
                <div id="form-contact" class="form full-width">
                    <h3 class="heading heading-secondary">Get Started</h3>
                    <p>Select Interactive is located just west of downtown Fort Worth off of IH-30 and University on Locke Avenue between Vickery Boulevard and the access road.</p>
                    <div id="form-content">
                        <div class="row">
                            <ul id="options" class="options">
                                <li><input type="checkbox" name="contact-reason" id="cb-info" value="General Information" /><label for="cb-info" class="lbl-cb">General Information.</label></li>
                                <li><input type="checkbox" name="contact-reason" id="cb-meeting" value="Request a Meeting" /><label for="cb-meeting" class="lbl-cb">Request a Meeting.</label></li>
                            </ul>
                        </div>
                        <div class="row">
                            <label for="tb-name">Your Name:</label>
                            <input type="text" id="tb-name" class="req" />
                        </div>
                        <div class="row">
                            <label for="tb-name">Your Email Address:</label>
                            <input type="email" id="tb-email" class="req" />
                        </div>
                        <div class="row">
                            <label for="tb-phone">Your Phone #:</label>
                            <input type="tel" id="tb-phone" class="req" />
                        </div>
                        <div class="row">
                            <label for="ta-comment">What can we do for you?</label>
                            <textarea id="ta-comment" class="req"></textarea>
                        </div>
                        <div class="row text-right">
                            <button id="btn-submit" class="btn-submit">Submit</button>
                        </div>
                        <div id="status" class="status"></div>
                    </div>
                </div>
            </div>
            <div class="col eq-height-item copy-default">
                <h4 class="heading heading-secondary">Connect</h4>
                <ul class="list-basic">
                    <li><a href="tel:817.210.4303"><i class="fa fa-phone"></i>817.210.4303</a></li>
                    <li><a href="mailto:contact@select-interactive.com"><i class="fa fa-envelope"></i>contact@select-interactive.com</a></li>
                    <li><a href="http://www.twitter.com/sel_interactive" target="_blank"><i class="fa fa-twitter"></i>@Sel_Interactive</a></li>
                    <li><a href="https://www.facebook.com/pages/Select-Interactive/365668433446732" target="_blank"><i class="fa fa-facebook"></i>Follow Us On Facebook</a></li>
                    <li><a href="https://plus.google.com/106726509160059301827/about" target="_blank"><i class="fa fa-google-plus"></i>Add Us to a Google+ Circle</a></li>
                    <li><a href="http://g.co/maps/529t3" target="_blank"><i class="fa fa-map-marker"></i>Get Directions</a></li>
                </ul>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="cphJS" Runat="Server">
    <script defer src="/js/si/contact.v-1.0.js"></script>
</asp:Content>