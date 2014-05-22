<%@ Page Title="" Language="VB" MasterPageFile="~/masterpages/standard-blank.master" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="login_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="cphMeta" Runat="Server">
    <title>Login</title>
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="cphHead" Runat="Server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="cphContent" Runat="Server">
    <div class="container-1000 container-vert-padding">
        <form id="form-login" class="full-width pre-4  suffix-4" action="login.ashx" method="post">
            <h2 class="heading heading-primary">SI Employee Login</h2>
            <div class="row">
                <label for="tb-username">Username:</label>
                <input type="text" id="tb-username" name="username" autofocus />
            </div>
            <div class="row">
                <label for="tb-password">Password:</label>
                <input type="password" id="tb-password" name="password" />
            </div>
            <div class="row text-right">
                <button id="btn-login">Login</button>
            </div>
            <div id="status-login" class="status"></div>
        </form>
    </div>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="cphJS" Runat="Server">
    <script defer src="/js/si/login.v-1.0.js"></script>
</asp:Content>