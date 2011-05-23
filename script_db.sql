CREATE TABLE Cierre_ProVta 
    (
     id_CierrexProVta INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     id_GFX INTEGER , 
     id_ProgramaVta INTEGER , 
     id_tipoperiodo INTEGER NOT NULL , 
     id_Periodo INTEGER NOT NULL , 
     id_Status_ProVta INTEGER NOT NULL , 
     fch_Modif DATETIME , 
     fch_Cierre DATETIME , 
     CONSTRAINT Cierre_ProVta_PK PRIMARY KEY NONCLUSTERED (id_CierrexProVta)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE Cierre_ProgramaVta_Detalle 
    (
     id_cierreProVta INTEGER NOT NULL , 
     id_ClasCorp INTEGER NOT NULL , 
     Cuota_ProVta INTEGER , 
     UnidadesPedidas INTEGER , 
     NumPedido_comp VARCHAR (20) , 
     userModif VARCHAR (20) , 
     CONSTRAINT Cierre_ProgramaVta_Detalle_PK PRIMARY KEY NONCLUSTERED (id_cierreProVta)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE Estatus_ProVta 
    (
     idStatus INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     Descripcion VARCHAR (20) , 
     fhc_modif DATETIME , 
     usermodif VARCHAR (20) , 
     CONSTRAINT Estatus_ProVta_PK PRIMARY KEY NONCLUSTERED (idStatus)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE Periodos 
    (
     id_TipoPeriodo INTEGER NOT NULL , 
     id_periodo INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     Descripcion VARCHAR (20) , 
     estatus VARCHAR (20) , 
     fch_inicio DATETIME , 
     fch_fin DATETIME , 
     CONSTRAINT Periodos_PK PRIMARY KEY NONCLUSTERED (id_periodo, id_TipoPeriodo)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE PlazoComercial 
    (
     id_PlazoComercial INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     descripcion VARCHAR (20) , 
     estatus VARCHAR (20) , 
     Porcentaje_Sustitucion_USD FLOAT , 
     Porcentaje_Sustitucion_NMX FLOAT , 
     CONSTRAINT PlazoComercial_PK PRIMARY KEY NONCLUSTERED (id_PlazoComercial)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE ProgramaVta 
    (
     idProgramaVta INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     nombre VARCHAR (20) , 
     descripcion VARCHAR (20) , 
     estatus VARCHAR (20) , 
     fch_publicacion DATETIME , 
     cd_usuarioalta VARCHAR (20) , 
     fch_alta DATETIME , 
     cd_usuariomodif VARCHAR (20) , 
     fch_modif DATETIME , 
     fch_caducidad DATETIME , 
     CONSTRAINT ProgramaVta_PK PRIMARY KEY NONCLUSTERED (idProgramaVta)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE ProgramaVtaDetalleCuota 
    (
     idProgramaVta INTEGER NOT NULL , 
     id_Gfx INTEGER NOT NULL , 
     id_clascorp INTEGER , 
     id_TipoPeriodo INTEGER NOT NULL , 
     id_Periodo INTEGER NOT NULL , 
     Tipo_cuota VARCHAR (20) , 
     cuota INTEGER , 
     id_PlazoComercial INTEGER NOT NULL , 
     CONSTRAINT ProgramaVtaDetalleCuota_PK PRIMARY KEY NONCLUSTERED (idProgramaVta, id_Gfx)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE ProgramaVtaDetalleSPA 
    (
     idProgramaVta INTEGER NOT NULL , 
     id_Gfx INTEGER NOT NULL , 
     id_clascorp INTEGER , 
     id_modelo INTEGER , 
     id_serie INTEGER , 
     SPA_base FLOAT , 
     SPA_Prog FLOAT , 
     id_PlazoComercial INTEGER NOT NULL , 
     CONSTRAINT ProgramaVtaDetalleSPA_PK PRIMARY KEY NONCLUSTERED (idProgramaVta, id_Gfx)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    



CREATE TABLE Tipo_Periodos 
    (
     id_TipoPeriodo INTEGER NOT NULL IDENTITY NOT FOR REPLICATION , 
     descipcion VARCHAR (20) , 
     estatus VARCHAR (20) , 
     CONSTRAINT Tipo_Periodos_PK PRIMARY KEY NONCLUSTERED (id_TipoPeriodo)
     WITH (
     ALLOW_PAGE_LOCKS = ON , 
     ALLOW_ROW_LOCKS = ON )
     ON "default" 
    )
    ON "default"
GO 

    


ALTER TABLE Cierre_ProVta 
    ADD CONSTRAINT Cierre_ProVta_Estatus_ProVta_FK FOREIGN KEY 
    ( 
     id_Status_ProVta
    ) 
    REFERENCES Estatus_ProVta 
    ( 
     idStatus 
    ) 
GO 


ALTER TABLE Cierre_ProVta 
    ADD CONSTRAINT Cierre_ProVta_Periodos_FK FOREIGN KEY 
    ( 
     id_Periodo, 
     id_tipoperiodo
    ) 
    REFERENCES Periodos 
    ( 
     id_periodo , 
     id_TipoPeriodo 
    ) 
GO 


ALTER TABLE Cierre_ProgramaVta_Detalle 
    ADD CONSTRAINT Cierre_ProgramaVta_Detalle_Cierre_ProVta_FK FOREIGN KEY 
    ( 
     id_cierreProVta
    ) 
    REFERENCES Cierre_ProVta 
    ( 
     id_CierrexProVta 
    ) 
GO 


ALTER TABLE Periodos 
    ADD CONSTRAINT Periodos_Tipo_Periodos_FK FOREIGN KEY 
    ( 
     id_TipoPeriodo
    ) 
    REFERENCES Tipo_Periodos 
    ( 
     id_TipoPeriodo 
    ) 
GO 


ALTER TABLE ProgramaVtaDetalleCuota 
    ADD CONSTRAINT ProgramaVtaDetalleCuota_ProgramaVta_FK FOREIGN KEY 
    ( 
     idProgramaVta
    ) 
    REFERENCES ProgramaVta 
    ( 
     idProgramaVta 
    ) 
GO 


ALTER TABLE ProgramaVtaDetalleCuota 
    ADD CONSTRAINT ProgramaVtaDetalle_Periodos_FK FOREIGN KEY 
    ( 
     id_Periodo, 
     id_TipoPeriodo
    ) 
    REFERENCES Periodos 
    ( 
     id_periodo , 
     id_TipoPeriodo 
    ) 
GO 


ALTER TABLE ProgramaVtaDetalleCuota 
    ADD CONSTRAINT ProgramaVtaDetalle_PlazoComercial_FK FOREIGN KEY 
    ( 
     id_PlazoComercial
    ) 
    REFERENCES PlazoComercial 
    ( 
     id_PlazoComercial 
    ) 
GO 


ALTER TABLE ProgramaVtaDetalleSPA 
    ADD CONSTRAINT ProgramaVtaDetallev1_PlazoComercial_FK FOREIGN KEY 
    ( 
     id_PlazoComercial
    ) 
    REFERENCES PlazoComercial 
    ( 
     id_PlazoComercial 
    ) 
GO 


ALTER TABLE ProgramaVtaDetalleSPA 
    ADD CONSTRAINT ProgramaVtaDetallev1_ProgramaVta_FK FOREIGN KEY 
    ( 
     idProgramaVta
    ) 
    REFERENCES ProgramaVta 
    ( 
     idProgramaVta 
    ) 
GO 







create view vwProgramaVta 

as

select * from ProgramaVta



-- Oracle SQL Developer Data Modeler Summary Report: 
-- 
-- CREATE TABLE                             9
-- CREATE INDEX                             0
-- ALTER TABLE                              9
-- CREATE VIEW                              0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- CREATE DATABASE                          0
-- CREATE DEFAULT                           0
-- CREATE INDEX ON VIEW                     0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE ROLE                              0
-- CREATE RULE                              0
-- CREATE PARTITION FUNCTION                0
-- CREATE PARTITION SCHEME                  0
-- 
-- DROP DATABASE                            0
-- 
-- ERRORS                                   0
-- WARNINGS                                 0
