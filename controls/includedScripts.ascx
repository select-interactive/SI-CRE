<%@ Control Language="VB" AutoEventWireup="false" CodeFile="includedScripts.ascx.vb" Inherits="controls_includedScripts" %>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="/js/libs/jquery/dist/jquery.v-1.11.1.min.js"><\/script>')</script>
<script defer src="/js/si/util-comp.v-1.<%= Month(Now) & Day(Now) & Year(Now) & Hour(Now) & Minute(Now) & Second(Now)%>.js"></script>