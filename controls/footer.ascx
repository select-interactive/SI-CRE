<%@ Control Language="VB" AutoEventWireup="false" CodeFile="footer.ascx.vb" Inherits="controls_footer" %>
<footer id="footer-main" class="container-full-width container-vert-padding container-bg-gray-dark container-cols-3">
    <div class="container eq-height  eq-height-no-mbl">
        <div class="col eq-height-item">
            <h4 class="heading heading-basic color-si-orange">Connect.</h4>
            <ul class="list-basic">
                <li>T. <a href="tel:817.210.4303">817.210.4303</a></li>
                <li><a href="mailto:contact@select-interactive.com">contact@select-interactive.com</a></li>
                <li>3343 Locke Ave. Suite 107<br />Fort Worth, TX 76107</li>
                <li>
                    <a target="_blank" href="https://twitter.com/sel_interactive" class="fa fa-twitter"></a>
                    <a target="_blank" href="https://www.facebook.com/SelectInteractive" class="fa fa-facebook-square"></a>
                    <a target="_blank" href="https://plus.google.com/+Select-interactive/posts" class="fa fa-google-plus"></a>
                    <a target="_blank" href="http://g.co/maps/529t3" target="_blank" class="fa fa-map-marker"></a>
                </li>
            </ul>
        </div>
        <div class="col eq-height-item">
            <h4 class="heading heading-basic color-si-orange">Learn More.</h4>
            <ul class="list-basic list-arrows">
                <li><a href="/components/">Components</a></li>
                <li><a href="/services/">Services</a></li>
                <li><a href="/about/">About Us</a></li>
                <li><a href="/contact/">Contact Us</a></li>
            </ul>
        </div>
        <div class="col eq-height-item">
            <h4 class="heading heading-basic color-si-orange">Striving to Build a Better Web.</h4>
            <p>Founded by <a href="mailto:jeremy@select-interactive.com">Jeremy Burton</a> and <a href="mailto:danh@select-interactive.com">Dan Harris</a>.</p>
            <p>&copy; <%= Year(Now)%> Select Interactive, LLC. All rights reserved.</p>
        </div>
    </div>
</footer>