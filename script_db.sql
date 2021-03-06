USE [SP]
GO
/****** Object:  Table [dbo].[Estatus_ProVta]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Estatus_ProVta]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Estatus_ProVta](
	[idStatus] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[Descripcion] [varchar](20) NULL,
	[fhc_modif] [datetime] NULL,
	[usermodif] [varchar](20) NULL,
 CONSTRAINT [Estatus_ProVta_PK] PRIMARY KEY NONCLUSTERED 
(
	[idStatus] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[vwProgramaVta]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[vwProgramaVta]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[vwProgramaVta](
	[idProgramaVta] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](20) NULL,
	[descripcion] [varchar](20) NULL,
	[estatus] [varchar](20) NULL,
	[fch_publicacion] [datetime] NULL,
	[cd_usuarioalta] [varchar](20) NULL,
	[fch_alta] [datetime] NULL,
	[cd_usuariomodif] [varchar](20) NULL,
	[fch_modif] [datetime] NULL,
	[fch_caducidad] [datetime] NULL,
 CONSTRAINT [PK_vwProgramaVtas] PRIMARY KEY CLUSTERED 
(
	[idProgramaVta] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Tipo_Periodos]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Tipo_Periodos]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Tipo_Periodos](
	[id_TipoPeriodo] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[descipcion] [varchar](20) NULL,
	[estatus] [varchar](20) NULL,
 CONSTRAINT [Tipo_Periodos_PK] PRIMARY KEY NONCLUSTERED 
(
	[id_TipoPeriodo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[ProgramaVta]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVta]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProgramaVta](
	[idProgramaVta] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[nombre] [varchar](20) NULL,
	[descripcion] [varchar](20) NULL,
	[estatus] [varchar](20) NULL,
	[fch_publicacion] [datetime] NULL,
	[cd_usuarioalta] [varchar](20) NULL,
	[fch_alta] [datetime] NULL,
	[cd_usuariomodif] [varchar](20) NULL,
	[fch_modif] [datetime] NULL,
	[fch_caducidad] [datetime] NULL,
 CONSTRAINT [ProgramaVta_PK] PRIMARY KEY NONCLUSTERED 
(
	[idProgramaVta] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[PlazoComercial]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PlazoComercial]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[PlazoComercial](
	[id_PlazoComercial] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[descripcion] [varchar](20) NULL,
	[estatus] [varchar](20) NULL,
	[Porcentaje_Sustitucion_USD] [float] NULL,
	[Porcentaje_Sustitucion_NMX] [float] NULL,
 CONSTRAINT [PlazoComercial_PK] PRIMARY KEY NONCLUSTERED 
(
	[id_PlazoComercial] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Periodos]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Periodos]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Periodos](
	[id_TipoPeriodo] [int] NOT NULL,
	[id_periodo] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[Descripcion] [varchar](20) NULL,
	[estatus] [varchar](20) NULL,
	[fch_inicio] [datetime] NULL,
	[fch_fin] [datetime] NULL,
 CONSTRAINT [Periodos_PK] PRIMARY KEY NONCLUSTERED 
(
	[id_periodo] ASC,
	[id_TipoPeriodo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[GetAllWithSP]    Script Date: 05/31/2011 15:22:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[GetAllWithSP]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'
CREATE PROCEDURE [dbo].[GetAllWithSP]
	/*
	(
	@parameter1 int = 5,
	@parameter2 datatype OUTPUT
	)
	*/

	
AS
	/* SET NOCOUNT ON */


	select * from ProgramaVta
	RETURN

' 
END
GO
/****** Object:  StoredProcedure [dbo].[SP_UpdateNada]    Script Date: 05/31/2011 15:22:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[SP_UpdateNada]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'


CREATE procedure [dbo].[SP_UpdateNada]

@id as int

as

update ProgramaVta set fch_modif = GETDATE() where idProgramaVta = @id

select @id

' 
END
GO
/****** Object:  Table [dbo].[ProgramaVtaDetalleSPA]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleSPA]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProgramaVtaDetalleSPA](
	[idProgramaVta] [int] NOT NULL,
	[id_Gfx] [int] NOT NULL,
	[id_clascorp] [int] NOT NULL,
	[id_modelo] [int] NOT NULL,
	[id_serie] [int] NULL,
	[SPA_base] [float] NULL,
	[SPA_Prog] [float] NULL,
	[id_PlazoComercial] [int] NOT NULL,
 CONSTRAINT [ProgramaVtaDetalleSPA_PK] PRIMARY KEY NONCLUSTERED 
(
	[idProgramaVta] ASC,
	[id_Gfx] ASC,
	[id_clascorp] ASC,
	[id_modelo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[ProgramaVtaDetalleCuota]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[ProgramaVtaDetalleCuota](
	[idProgramaVta] [int] NOT NULL,
	[id_Gfx] [int] NOT NULL,
	[id_clascorp] [int] NOT NULL,
	[id_TipoPeriodo] [int] NOT NULL,
	[id_Periodo] [int] NOT NULL,
	[Tipo_cuota] [varchar](20) NULL,
	[cuota] [int] NULL,
	[id_PlazoComercial] [int] NOT NULL,
 CONSTRAINT [ProgramaVtaDetalleCuota_PK] PRIMARY KEY NONCLUSTERED 
(
	[idProgramaVta] ASC,
	[id_Gfx] ASC,
	[id_TipoPeriodo] ASC,
	[id_Periodo] ASC,
	[id_clascorp] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Cierre_ProVta]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Cierre_ProVta](
	[id_CierrexProVta] [int] IDENTITY(1,1) NOT FOR REPLICATION NOT NULL,
	[id_GFX] [int] NOT NULL,
	[id_ProgramaVta] [int] NOT NULL,
	[id_tipoperiodo] [int] NOT NULL,
	[id_Periodo] [int] NOT NULL,
	[id_Status_ProVta] [int] NOT NULL,
	[fch_Modif] [datetime] NULL,
	[fch_Cierre] [datetime] NULL,
 CONSTRAINT [Cierre_ProVta_PK] PRIMARY KEY NONCLUSTERED 
(
	[id_CierrexProVta] ASC,
	[id_GFX] ASC,
	[id_ProgramaVta] ASC,
	[id_tipoperiodo] ASC,
	[id_Periodo] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
/****** Object:  Table [dbo].[Cierre_ProgramaVta_Detalle]    Script Date: 05/31/2011 15:22:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProgramaVta_Detalle]') AND type in (N'U'))
BEGIN
CREATE TABLE [dbo].[Cierre_ProgramaVta_Detalle](
	[id_cierreProVta] [int] NOT NULL,
	[id_ClasCorp] [int] NOT NULL,
	[Cuota_ProVta] [int] NULL,
	[UnidadesPedidas] [int] NULL,
	[NumPedido_comp] [varchar](20) NULL,
	[userModif] [varchar](20) NULL,
	[Cierre_ProVta_id_GFX] [int] NOT NULL,
	[Cierre_ProVta_id_ProgramaVta] [int] NOT NULL,
	[Cierre_ProVta_id_tipoperiodo] [int] NOT NULL,
	[Cierre_ProVta_id_Periodo] [int] NOT NULL,
 CONSTRAINT [Cierre_ProgramaVta_Detalle_PK] PRIMARY KEY NONCLUSTERED 
(
	[id_cierreProVta] ASC,
	[id_ClasCorp] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]
END
GO
SET ANSI_PADDING OFF
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProVtaxDealer]    Script Date: 05/31/2011 15:22:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[sp_GetProVtaxDealer]') AND type in (N'P', N'PC'))
BEGIN
EXEC dbo.sp_executesql @statement = N'
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[sp_GetProVtaxDealer] 
	-- Add the parameters for the stored procedure here
	@idDealer int
	AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT  a.idProgramaVta, a.nombre from dbo.ProgramaVta a, dbo.ProgramaVtaDetalleCuota b
	where a.idProgramaVta = b.idProgramaVta
	and b.id_Gfx = @idDealer
END

' 
END
GO
/****** Object:  View [dbo].[vw_ProVtaDealer]    Script Date: 05/31/2011 15:22:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[vw_ProVtaDealer]'))
EXEC dbo.sp_executesql @statement = N'
CREATE VIEW [dbo].[vw_ProVtaDealer]
AS
SELECT     DISTINCT a.idProgramaVta, a.nombre, b.id_Gfx
FROM         dbo.ProgramaVta AS a INNER JOIN
                      dbo.ProgramaVtaDetalleCuota AS b ON a.idProgramaVta = b.idProgramaVta AND a.estatus = ''Activo'' AND a.fch_caducidad > GETDATE()

'
GO
IF NOT EXISTS (SELECT * FROM ::fn_listextendedproperty(N'MS_DiagramPane1' , N'SCHEMA',N'dbo', N'VIEW',N'vw_ProVtaDealer', NULL,NULL))
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPane1', @value=N'[0E232FF0-B466-11cf-A24F-00AA00A3EFFF, 1.00]
Begin DesignProperties = 
   Begin PaneConfigurations = 
      Begin PaneConfiguration = 0
         NumPanes = 4
         Configuration = "(H (1[40] 4[20] 2[20] 3) )"
      End
      Begin PaneConfiguration = 1
         NumPanes = 3
         Configuration = "(H (1 [50] 4 [25] 3))"
      End
      Begin PaneConfiguration = 2
         NumPanes = 3
         Configuration = "(H (1[50] 2[25] 3) )"
      End
      Begin PaneConfiguration = 3
         NumPanes = 3
         Configuration = "(H (4 [30] 2 [40] 3))"
      End
      Begin PaneConfiguration = 4
         NumPanes = 2
         Configuration = "(H (1 [56] 3))"
      End
      Begin PaneConfiguration = 5
         NumPanes = 2
         Configuration = "(H (2 [66] 3))"
      End
      Begin PaneConfiguration = 6
         NumPanes = 2
         Configuration = "(H (4 [50] 3))"
      End
      Begin PaneConfiguration = 7
         NumPanes = 1
         Configuration = "(V (3))"
      End
      Begin PaneConfiguration = 8
         NumPanes = 3
         Configuration = "(H (1[56] 4[18] 2) )"
      End
      Begin PaneConfiguration = 9
         NumPanes = 2
         Configuration = "(H (1 [75] 4))"
      End
      Begin PaneConfiguration = 10
         NumPanes = 2
         Configuration = "(H (1[66] 2) )"
      End
      Begin PaneConfiguration = 11
         NumPanes = 2
         Configuration = "(H (4 [60] 2))"
      End
      Begin PaneConfiguration = 12
         NumPanes = 1
         Configuration = "(H (1) )"
      End
      Begin PaneConfiguration = 13
         NumPanes = 1
         Configuration = "(V (4))"
      End
      Begin PaneConfiguration = 14
         NumPanes = 1
         Configuration = "(V (2))"
      End
      ActivePaneConfig = 2
   End
   Begin DiagramPane = 
      Begin Origin = 
         Top = 0
         Left = 0
      End
      Begin Tables = 
         Begin Table = "a"
            Begin Extent = 
               Top = 6
               Left = 38
               Bottom = 125
               Right = 205
            End
            DisplayFlags = 280
            TopColumn = 6
         End
         Begin Table = "b"
            Begin Extent = 
               Top = 6
               Left = 243
               Bottom = 125
               Right = 417
            End
            DisplayFlags = 280
            TopColumn = 0
         End
      End
   End
   Begin SQLPane = 
   End
   Begin DataPane = 
      Begin ParameterDefaults = ""
      End
      Begin ColumnWidths = 9
         Width = 284
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
         Width = 1500
      End
   End
   Begin CriteriaPane = 
      PaneHidden = 
      Begin ColumnWidths = 11
         Column = 1440
         Alias = 900
         Table = 1170
         Output = 720
         Append = 1400
         NewValue = 1170
         SortType = 1350
         SortOrder = 1410
         GroupBy = 1350
         Filter = 1350
         Or = 1350
         Or = 1350
         Or = 1350
      End
   End
End
' , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vw_ProVtaDealer'
GO
IF NOT EXISTS (SELECT * FROM ::fn_listextendedproperty(N'MS_DiagramPaneCount' , N'SCHEMA',N'dbo', N'VIEW',N'vw_ProVtaDealer', NULL,NULL))
EXEC sys.sp_addextendedproperty @name=N'MS_DiagramPaneCount', @value=1 , @level0type=N'SCHEMA',@level0name=N'dbo', @level1type=N'VIEW',@level1name=N'vw_ProVtaDealer'
GO
/****** Object:  View [dbo].[Vw_PedidosCierreProVta]    Script Date: 05/31/2011 15:22:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[Vw_PedidosCierreProVta]'))
EXEC dbo.sp_executesql @statement = N'


  
  
CREATE VIEW [dbo].[Vw_PedidosCierreProVta]  
  
AS

select   a.*, b.cuota, (b.cuota - a.UnidadesPedidas) as UnidadesFaltantes,b.Tipo_cuota from 
		(select b.CD_DISTRIBUIDOR,d.idProgramaVta,e.id_TipoPeriodo,e.id_Periodo,g.idClasCorp, g.cveClasCorp, Sum(c.to_unidades) as UnidadesPedidas
			from navimex_ventas..TRDMC_PedidoProgramaVta a, 
			navimex_ventas..TCP001_PEDIDO b,
			navimex_ventas..TCP002_PEDIDO_DETALLE c,
			ProgramaVta d,
			ProgramaVtaDetalleCuota e,
			navimex_ventas..vwC_MODELO f,
			Datamart_CMI..C_ClasCorp g 
		where a.CD_PEDIDO = b.CD_PEDIDO
			AND A.Id_ProVta = D.idProgramaVta
			AND B.CD_PEDIDO= C.CD_PEDIDO
			AND D.idProgramaVta = E.idProgramaVta
			and b.CD_DISTRIBUIDOR = e.id_Gfx
			AND F.modelo = C.TX_MODELO
			AND F.cveClasCorp = G.cveClasCorp
			AND E.id_clascorp = G.idClasCorp
		--faltan los estatus de pedido y de programade venta
		group by b.CD_DISTRIBUIDOR,d.idProgramaVta,e.id_TipoPeriodo,e.id_Periodo ,g.idClasCorp,g.cveClasCorp) a, ProgramaVtaDetalleCuota b
where a.cd_distribuidor = b.id_Gfx
	and a.idProgramaVta=b.idProgramaVta
	and a.id_Periodo = b.id_Periodo
	and a.idClasCorp = b.id_clascorp



'
GO
/****** Object:  View [dbo].[VCDMC_Distribuidor]    Script Date: 05/31/2011 15:22:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
IF NOT EXISTS (SELECT * FROM sys.views WHERE object_id = OBJECT_ID(N'[dbo].[VCDMC_Distribuidor]'))
EXEC dbo.sp_executesql @statement = N'
  
  
CREATE VIEW [dbo].[VCDMC_Distribuidor]  
  
AS  
SELECT 2 AS cd_empresa,  
  1 AS cd_marca,  
  idGFX AS cd_distribuidor,  
  RazonSocial AS nb_razonsocial,  
  Alias AS nb_alias,  
  RFC AS tx_rfc  
FROM datamart_cmi.dbo.C_GFX   
WHERE tipo_gfx = 2   
AND  estatus = 1   
AND  idgfx BETWEEN 930000 AND 939999  
  
'
GO
/****** Object:  ForeignKey [Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProgramaVta_Detalle]'))
ALTER TABLE [dbo].[Cierre_ProgramaVta_Detalle]  WITH CHECK ADD  CONSTRAINT [Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK] FOREIGN KEY([id_cierreProVta], [Cierre_ProVta_id_GFX], [Cierre_ProVta_id_ProgramaVta], [Cierre_ProVta_id_tipoperiodo], [Cierre_ProVta_id_Periodo])
REFERENCES [dbo].[Cierre_ProVta] ([id_CierrexProVta], [id_GFX], [id_ProgramaVta], [id_tipoperiodo], [id_Periodo])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProgramaVta_Detalle]'))
ALTER TABLE [dbo].[Cierre_ProgramaVta_Detalle] CHECK CONSTRAINT [Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK]
GO
/****** Object:  ForeignKey [Cierre_ProVta_Estatus_ProVta_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_Estatus_ProVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta]  WITH CHECK ADD  CONSTRAINT [Cierre_ProVta_Estatus_ProVta_FK] FOREIGN KEY([id_Status_ProVta])
REFERENCES [dbo].[Estatus_ProVta] ([idStatus])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_Estatus_ProVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta] CHECK CONSTRAINT [Cierre_ProVta_Estatus_ProVta_FK]
GO
/****** Object:  ForeignKey [Cierre_ProVta_Periodos_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta]  WITH CHECK ADD  CONSTRAINT [Cierre_ProVta_Periodos_FK] FOREIGN KEY([id_Periodo], [id_tipoperiodo])
REFERENCES [dbo].[Periodos] ([id_periodo], [id_TipoPeriodo])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta] CHECK CONSTRAINT [Cierre_ProVta_Periodos_FK]
GO
/****** Object:  ForeignKey [Cierre_ProVta_ProgramaVta_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta]  WITH CHECK ADD  CONSTRAINT [Cierre_ProVta_ProgramaVta_FK] FOREIGN KEY([id_ProgramaVta])
REFERENCES [dbo].[ProgramaVta] ([idProgramaVta])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Cierre_ProVta]'))
ALTER TABLE [dbo].[Cierre_ProVta] CHECK CONSTRAINT [Cierre_ProVta_ProgramaVta_FK]
GO
/****** Object:  ForeignKey [Periodos_Tipo_Periodos_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Periodos_Tipo_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Periodos]'))
ALTER TABLE [dbo].[Periodos]  WITH CHECK ADD  CONSTRAINT [Periodos_Tipo_Periodos_FK] FOREIGN KEY([id_TipoPeriodo])
REFERENCES [dbo].[Tipo_Periodos] ([id_TipoPeriodo])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[Periodos_Tipo_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[Periodos]'))
ALTER TABLE [dbo].[Periodos] CHECK CONSTRAINT [Periodos_Tipo_Periodos_FK]
GO
/****** Object:  ForeignKey [ProgramaVtaDetalle_Periodos_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalle_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota]  WITH CHECK ADD  CONSTRAINT [ProgramaVtaDetalle_Periodos_FK] FOREIGN KEY([id_Periodo], [id_TipoPeriodo])
REFERENCES [dbo].[Periodos] ([id_periodo], [id_TipoPeriodo])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalle_Periodos_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota] CHECK CONSTRAINT [ProgramaVtaDetalle_Periodos_FK]
GO
/****** Object:  ForeignKey [ProgramaVtaDetalle_PlazoComercial_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalle_PlazoComercial_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota]  WITH CHECK ADD  CONSTRAINT [ProgramaVtaDetalle_PlazoComercial_FK] FOREIGN KEY([id_PlazoComercial])
REFERENCES [dbo].[PlazoComercial] ([id_PlazoComercial])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalle_PlazoComercial_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota] CHECK CONSTRAINT [ProgramaVtaDetalle_PlazoComercial_FK]
GO
/****** Object:  ForeignKey [ProgramaVtaDetalleCuota_ProgramaVta_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota]  WITH CHECK ADD  CONSTRAINT [ProgramaVtaDetalleCuota_ProgramaVta_FK] FOREIGN KEY([idProgramaVta])
REFERENCES [dbo].[ProgramaVta] ([idProgramaVta])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleCuota]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleCuota] CHECK CONSTRAINT [ProgramaVtaDetalleCuota_ProgramaVta_FK]
GO
/****** Object:  ForeignKey [ProgramaVtaDetallev1_PlazoComercial_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetallev1_PlazoComercial_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleSPA]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleSPA]  WITH CHECK ADD  CONSTRAINT [ProgramaVtaDetallev1_PlazoComercial_FK] FOREIGN KEY([id_PlazoComercial])
REFERENCES [dbo].[PlazoComercial] ([id_PlazoComercial])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetallev1_PlazoComercial_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleSPA]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleSPA] CHECK CONSTRAINT [ProgramaVtaDetallev1_PlazoComercial_FK]
GO
/****** Object:  ForeignKey [ProgramaVtaDetallev1_ProgramaVta_FK]    Script Date: 05/31/2011 15:22:40 ******/
IF NOT EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetallev1_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleSPA]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleSPA]  WITH CHECK ADD  CONSTRAINT [ProgramaVtaDetallev1_ProgramaVta_FK] FOREIGN KEY([idProgramaVta])
REFERENCES [dbo].[ProgramaVta] ([idProgramaVta])
GO
IF  EXISTS (SELECT * FROM sys.foreign_keys WHERE object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetallev1_ProgramaVta_FK]') AND parent_object_id = OBJECT_ID(N'[dbo].[ProgramaVtaDetalleSPA]'))
ALTER TABLE [dbo].[ProgramaVtaDetalleSPA] CHECK CONSTRAINT [ProgramaVtaDetallev1_ProgramaVta_FK]
GO
