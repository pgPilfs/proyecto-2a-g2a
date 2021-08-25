USE [master]
GO
/****** Object:  Database [VirtualWallet]    Script Date: 25/8/2021 20:32:58 ******/
CREATE DATABASE [VirtualWallet]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'VirtualWallet', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\VirtualWallet.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'VirtualWallet_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\VirtualWallet_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [VirtualWallet] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [VirtualWallet].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [VirtualWallet] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [VirtualWallet] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [VirtualWallet] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [VirtualWallet] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [VirtualWallet] SET ARITHABORT OFF 
GO
ALTER DATABASE [VirtualWallet] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [VirtualWallet] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [VirtualWallet] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [VirtualWallet] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [VirtualWallet] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [VirtualWallet] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [VirtualWallet] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [VirtualWallet] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [VirtualWallet] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [VirtualWallet] SET  DISABLE_BROKER 
GO
ALTER DATABASE [VirtualWallet] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [VirtualWallet] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [VirtualWallet] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [VirtualWallet] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [VirtualWallet] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [VirtualWallet] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [VirtualWallet] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [VirtualWallet] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [VirtualWallet] SET  MULTI_USER 
GO
ALTER DATABASE [VirtualWallet] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [VirtualWallet] SET DB_CHAINING OFF 
GO
ALTER DATABASE [VirtualWallet] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [VirtualWallet] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [VirtualWallet] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [VirtualWallet] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [VirtualWallet] SET QUERY_STORE = OFF
GO
USE [VirtualWallet]
GO
/****** Object:  Table [dbo].[clientes]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[clientes](
	[DNI] [int] NOT NULL,
	[contra] [varchar](50) NOT NULL,
	[mail] [varchar](50) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[apellido] [varchar](50) NOT NULL,
	[id_direccion] [int] NULL,
	[DNI_foto_frente] [image] NULL,
	[DNI_foto_dorso] [image] NULL,
 CONSTRAINT [PK_clientes] PRIMARY KEY CLUSTERED 
(
	[DNI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cuentas]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuentas](
	[CVU] [varchar](50) NOT NULL,
	[id_cliente] [int] NOT NULL,
	[saldo] [float] NOT NULL,
	[fecha_alta] [datetime] NOT NULL,
	[fecha_baja] [datetime] NULL,
 CONSTRAINT [PK_Cuentas] PRIMARY KEY CLUSTERED 
(
	[CVU] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Direcciones]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Direcciones](
	[id_direccion] [int] IDENTITY(1,1) NOT NULL,
	[id_localidad] [int] NOT NULL,
	[calle] [varchar](50) NOT NULL,
	[numero] [int] NOT NULL,
 CONSTRAINT [PK_Direcciones] PRIMARY KEY CLUSTERED 
(
	[id_direccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Localidades]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Localidades](
	[id_localidad] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[id_provincia] [int] NOT NULL,
 CONSTRAINT [PK_Localidades] PRIMARY KEY CLUSTERED 
(
	[id_localidad] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Operaciones]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operaciones](
	[id_operacion] [int] IDENTITY(1,1) NOT NULL,
	[tipo_operacion] [int] NOT NULL,
	[id_emisor] [varchar](50) NOT NULL,
	[id_destinatario] [varchar](50) NOT NULL,
	[monto] [float] NOT NULL,
	[fecha] [date] NOT NULL,
 CONSTRAINT [PK_Operaciones] PRIMARY KEY CLUSTERED 
(
	[id_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincias]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Provincias](
	[id_provincia] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](70) NOT NULL,
 CONSTRAINT [PK_Provincias] PRIMARY KEY CLUSTERED 
(
	[id_provincia] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tipos_opereciones]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipos_opereciones](
	[id_tipo_operacion] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](50) NOT NULL,
	[descripcion] [varchar](200) NOT NULL,
 CONSTRAINT [PK_Tipos_opereciones] PRIMARY KEY CLUSTERED 
(
	[id_tipo_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[clientes] ([DNI], [contra], [mail], [nombre], [apellido], [id_direccion], [DNI_foto_frente], [DNI_foto_dorso]) VALUES (42977256, N'angeloBenedetti123!', N'angelo.benedetti2910@gmail.com', N'angelo', N'benedetti', 4, NULL, NULL)
INSERT [dbo].[clientes] ([DNI], [contra], [mail], [nombre], [apellido], [id_direccion], [DNI_foto_frente], [DNI_foto_dorso]) VALUES (42977257, N'alfredoBenedetti123!', N'alfredo.benedetti2910@gmail.com', N'alfredo', N'bendetti', 7, NULL, NULL)
GO
INSERT [dbo].[Cuentas] ([CVU], [id_cliente], [saldo], [fecha_alta], [fecha_baja]) VALUES (N'0340100800100586333009', 42977256, 0, CAST(N'2021-08-21T00:00:00.000' AS DateTime), NULL)
INSERT [dbo].[Cuentas] ([CVU], [id_cliente], [saldo], [fecha_alta], [fecha_baja]) VALUES (N'0340100800100586333010', 42977257, 0, CAST(N'2021-08-21T00:00:00.000' AS DateTime), NULL)
GO
SET IDENTITY_INSERT [dbo].[Direcciones] ON 

INSERT [dbo].[Direcciones] ([id_direccion], [id_localidad], [calle], [numero]) VALUES (4, 6, N'av.bodereau', 8700)
INSERT [dbo].[Direcciones] ([id_direccion], [id_localidad], [calle], [numero]) VALUES (7, 6, N'av.ricardo rojas', 1400)
SET IDENTITY_INSERT [dbo].[Direcciones] OFF
GO
SET IDENTITY_INSERT [dbo].[Localidades] ON 

INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (1, N'chacomus', 1)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (2, N'belgrano', 1)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (3, N'fravega', 1)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (4, N'palermo', 2)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (5, N'la ferrere', 2)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (6, N'la matanza', 2)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (7, N'chipa', 3)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (8, N'empanada', 3)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (9, N'carnaval', 3)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (10, N'resistencia', 4)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (11, N'puna', 4)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (12, N'bosquesito ', 4)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (13, N'frio', 5)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (14, N'petroleo', 5)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (15, N'llanura', 5)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (16, N'el uli', 6)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (17, N'fernet', 6)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (18, N'pilar', 6)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (19, N'corrientes', 7)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (20, N'bella vista', 7)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (21, N'esquina', 7)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (22, N'concordia', 8)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (23, N'villawai', 8)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (24, N'crespo ', 8)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (25, N'el colorado', 9)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (26, N'el peluca', 9)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (27, N'el pelado', 9)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (28, N'tilcara', 10)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (29, N'purmamarca', 10)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (30, N'hornillos', 10)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (31, N'pernasconi', 11)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (32, N'alta italia', 11)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (33, N'ratata', 11)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (34, N'sanagasta', 12)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (35, N'nongasta', 12)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (36, N'antafagasta', 12)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (37, N'godoi cruz', 13)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (38, N'genral alvear', 13)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (39, N'colonia suiza ', 13)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (40, N'puerto rico', 14)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (41, N'el dorado', 14)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (42, N'el coludo', 14)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (43, N'arrollito', 15)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (44, N'punin de los andes', 15)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (45, N'cutralco', 15)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (46, N'barilocho', 16)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (47, N'el bolson', 16)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (48, N'5 saltos', 16)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (49, N'cafayate', 17)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (50, N'molinos', 17)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (51, N'san carlos', 17)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (52, N'rivadavia ', 18)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (53, N'san martin', 18)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (54, N'rawson ', 18)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (55, N'alto lindo', 19)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (56, N'alto pelado', 19)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (57, N'alto pencoso', 19)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (58, N'perito moreno', 20)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (59, N'puerto san julian', 20)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (60, N'klando', 20)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (61, N'rosario', 21)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (62, N'arollo seco', 21)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (64, N'rafaela', 21)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (65, N'termas de rio hondo ', 22)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (66, N'neuva esperanza', 22)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (67, N'loreto', 22)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (68, N'tolhuin', 23)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (69, N'rio grande', 23)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (71, N'usuhaia', 23)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (72, N'simoca', 24)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (73, N'alverdi', 24)
INSERT [dbo].[Localidades] ([id_localidad], [nombre], [id_provincia]) VALUES (74, N'raco', 24)
SET IDENTITY_INSERT [dbo].[Localidades] OFF
GO
SET IDENTITY_INSERT [dbo].[Provincias] ON 

INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (1, N'Buenos Aires')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (2, N'Capital Federal')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (3, N'Catamarca')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (4, N'Chaco')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (5, N'Chubut')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (6, N'Córdoba')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (7, N'Corrientes')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (8, N'Entre Ríos')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (9, N'Formosa')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (10, N'Jujuy')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (11, N'La Pampa')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (12, N'La Rioja')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (13, N'Mendoza')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (14, N'Misiones')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (15, N'Neuquén')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (16, N'Río Negro
')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (17, N'Salta')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (18, N'San Juan
')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (19, N'San Luis')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (20, N'Santa Cruz')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (21, N'Santa Fe')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (22, N'Santiago del Estero')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (23, N'Tierra del Fuego')
INSERT [dbo].[Provincias] ([id_provincia], [nombre]) VALUES (24, N'Tucumán')
SET IDENTITY_INSERT [dbo].[Provincias] OFF
GO
SET IDENTITY_INSERT [dbo].[Tipos_opereciones] ON 

INSERT [dbo].[Tipos_opereciones] ([id_tipo_operacion], [nombre], [descripcion]) VALUES (0, N'egreso', N'Se transfiere dinero a una cuenta en base a su CVU, la transaccion debe quedar registrada con el monto a transferir , la fecha y hora , ademas del CVU de ambas partes ')
INSERT [dbo].[Tipos_opereciones] ([id_tipo_operacion], [nombre], [descripcion]) VALUES (1, N'ingreso', N'Se transfiere dinero a una cuenta en base a su CVU, la transaccion debe quedar registrada con el monto a transferir , la fecha y hora , ademas del CVU de ambas partes ')
INSERT [dbo].[Tipos_opereciones] ([id_tipo_operacion], [nombre], [descripcion]) VALUES (2, N'prestamo', N'no lo tengo definido')
SET IDENTITY_INSERT [dbo].[Tipos_opereciones] OFF
GO
ALTER TABLE [dbo].[clientes]  WITH CHECK ADD  CONSTRAINT [FK_clientes_Direcciones] FOREIGN KEY([id_direccion])
REFERENCES [dbo].[Direcciones] ([id_direccion])
GO
ALTER TABLE [dbo].[clientes] CHECK CONSTRAINT [FK_clientes_Direcciones]
GO
ALTER TABLE [dbo].[Cuentas]  WITH CHECK ADD  CONSTRAINT [FK_Cuentas_clientes] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[clientes] ([DNI])
GO
ALTER TABLE [dbo].[Cuentas] CHECK CONSTRAINT [FK_Cuentas_clientes]
GO
ALTER TABLE [dbo].[Direcciones]  WITH CHECK ADD  CONSTRAINT [FK_Direcciones_Localidades] FOREIGN KEY([id_localidad])
REFERENCES [dbo].[Localidades] ([id_localidad])
GO
ALTER TABLE [dbo].[Direcciones] CHECK CONSTRAINT [FK_Direcciones_Localidades]
GO
ALTER TABLE [dbo].[Localidades]  WITH CHECK ADD  CONSTRAINT [FK_Localidades_Provincias] FOREIGN KEY([id_provincia])
REFERENCES [dbo].[Provincias] ([id_provincia])
GO
ALTER TABLE [dbo].[Localidades] CHECK CONSTRAINT [FK_Localidades_Provincias]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Cuentas] FOREIGN KEY([id_emisor])
REFERENCES [dbo].[Cuentas] ([CVU])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Cuentas]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Tipos_opereciones1] FOREIGN KEY([tipo_operacion])
REFERENCES [dbo].[Tipos_opereciones] ([id_tipo_operacion])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Tipos_opereciones1]
GO
/****** Object:  StoredProcedure [dbo].[obtener_cliente]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[obtener_cliente]
@DNI int
AS
SELECT DNI,mail,nombre,apellido,dir.calle,dir.numero
FROM clientes cli
join Direcciones dir on dir.id_direccion = cli.id_direccion
WHERE DNI = @DNI
GO
/****** Object:  StoredProcedure [dbo].[obtener_contra]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[obtener_contra] @mail varchar(50)
AS
SELECT  mail, contra
FROM clientes
WHERE mail = @mail
GO
/****** Object:  StoredProcedure [dbo].[obtener_saldo]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[obtener_saldo]
@id_cliente int , @CVU varchar(50)
AS
Select saldo
FROM Cuentas
WHERE id_cliente = @id_cliente or CVU = @CVU 
GO
/****** Object:  StoredProcedure [dbo].[obtener_ultimos_movimientos]    Script Date: 25/8/2021 20:32:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[obtener_ultimos_movimientos] 
@id_emisor varchar(50)
AS
SELECT top 10 id_operacion,tipo.nombre,id_emisor,id_destinatario,monto,fecha
FROM Operaciones opc
JOIN Tipos_opereciones tipo  ON tipo.id_tipo_operacion = opc.tipo_operacion
WHERE opc.id_emisor = @id_emisor 
ORDER BY id_operacion DESC;
GO
USE [master]
GO
ALTER DATABASE [VirtualWallet] SET  READ_WRITE 
GO
