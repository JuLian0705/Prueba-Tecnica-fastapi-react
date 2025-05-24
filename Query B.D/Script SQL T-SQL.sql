--Crear la base de datos
CREATE DATABASE Dispositivos

--Crear la tabla dispositivos
CREATE TABLE Dispositivos (
	Id Int IDENTITY(1,1) PRIMARY KEY,
	Nombre NVARCHAR(100) NOT NULL,
	Tipo NVARCHAR(50),
	Estado BIT NOT NULL,
	FechaRegistro DATETIME DEFAULT GETDATE()
)
--Consultar dispositivos activos
SELECT * FROM Dispositivos WHERE Estado = 1 ORDER BY Nombre ASC;

--Insertar datos de prueba
INSERT INTO Dispositivos (Nombre, Tipo, Estado)
VALUES 
('GPS Alpha', 'GPS', 1),
('GPS Beta', 'GPS', 0),
('GPS Iota', 'GPS', 1),
('GPS Kappa', 'GPS', 0),
('GPS Nova', 'GPS', 1),
('GPS Rho', 'GPS', 1),
('GPS Sigma', 'GPS', 0),
('Sensor Gamma', 'Sensor', 1),
('Sensor Delta', 'Sensor', 0),
('Sensor Lambda', 'Sensor', 1),
('Sensor Mu', 'Sensor', 0),
('Sensor Tau', 'Sensor', 1),
('Sensor Upsilon', 'Sensor', 0),
('Sensor Orion', 'Sensor', 0),
('Monitor Epsilon', 'Monitor', 1);


--Procedimiento almacenado para actualizar estado
CREATE PROCEDURE ActualizarEstadoDispositivo
    @Id INT,
    @NuevoEstado BIT
AS
BEGIN
    UPDATE Dispositivos
    SET Estado = @NuevoEstado
    WHERE Id = @Id;
END;

--Procedimietno para hacer el backup de la base de datos mediante sql transaccional
BACKUP DATABASE Dispositivos
TO DISK = 'C:\Backup\Dispositivos.bak'
WITH FORMAT, INIT, NAME = 'BackupCompletoDispositivos';





