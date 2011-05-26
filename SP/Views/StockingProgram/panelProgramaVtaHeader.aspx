<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage<SP.DomainModel.ProgramaVta>" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">


    <%: Html.HiddenFor(o => o.nombre) %>
    <script type="text/javascript">
        var unItem = '<%= this.Model.nombre %>'

    </script>
 <script type="text/javascript" src="<%: Url.Content("~/Content/js/cmi/StockingProgram/panelProgramaVtaHeader.js")%>"></script>

</asp:Content>
