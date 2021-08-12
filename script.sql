USE [master]
GO
/****** Object:  Database [VirtualWallet]    Script Date: 12/8/2021 11:18:58 ******/
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
/****** Object:  Table [dbo].[clientes]    Script Date: 12/8/2021 11:18:58 ******/
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
	[id_direccion] [int] NOT NULL,
	[DNI_foto_delante] [image] NOT NULL,
	[DNI_foto_Treacera] [image] NOT NULL,
 CONSTRAINT [PK_clientes] PRIMARY KEY CLUSTERED 
(
	[DNI] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cuentas]    Script Date: 12/8/2021 11:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cuentas](
	[CVU] [varchar](50) NOT NULL,
	[id_cliente] [int] NOT NULL,
	[saldo] [float] NOT NULL,
	[fecha_alta] [datetime] NOT NULL,
	[fehca_baja] [datetime] NULL,
 CONSTRAINT [PK_Cuentas] PRIMARY KEY CLUSTERED 
(
	[CVU] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Direcciones]    Script Date: 12/8/2021 11:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Direcciones](
	[id_direccion] [int] IDENTITY(1,1) NOT NULL,
	[id_provincia] [int] NOT NULL,
	[calle] [varchar](50) NOT NULL,
	[numero] [int] NOT NULL,
 CONSTRAINT [PK_Direcciones] PRIMARY KEY CLUSTERED 
(
	[id_direccion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Operaciones]    Script Date: 12/8/2021 11:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Operaciones](
	[id_operacion] [int] IDENTITY(1,1) NOT NULL,
	[tipo_operacion] [int] NOT NULL,
	[emisor] [bigint] NOT NULL,
	[destinatario] [bigint] NOT NULL,
	[monto] [float] NOT NULL,
 CONSTRAINT [PK_Operaciones] PRIMARY KEY CLUSTERED 
(
	[id_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Provincias]    Script Date: 12/8/2021 11:18:58 ******/
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
/****** Object:  Table [dbo].[Tipos_opereciones]    Script Date: 12/8/2021 11:18:58 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tipos_opereciones](
	[id_tipo_operacion] [int] IDENTITY(1,1) NOT NULL,
	[descripcion] [varchar](200) NULL,
 CONSTRAINT [PK_Tipos_opereciones] PRIMARY KEY CLUSTERED 
(
	[id_tipo_operacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Cuentas]  WITH CHECK ADD  CONSTRAINT [FK_Cuentas_clientes] FOREIGN KEY([id_cliente])
REFERENCES [dbo].[clientes] ([DNI])
GO
ALTER TABLE [dbo].[Cuentas] CHECK CONSTRAINT [FK_Cuentas_clientes]
GO
ALTER TABLE [dbo].[Direcciones]  WITH CHECK ADD  CONSTRAINT [FK_Direcciones_Provincias] FOREIGN KEY([id_provincia])
REFERENCES [dbo].[Provincias] ([id_provincia])
GO
ALTER TABLE [dbo].[Direcciones] CHECK CONSTRAINT [FK_Direcciones_Provincias]
GO
ALTER TABLE [dbo].[Operaciones]  WITH CHECK ADD  CONSTRAINT [FK_Operaciones_Tipos_opereciones1] FOREIGN KEY([tipo_operacion])
REFERENCES [dbo].[Tipos_opereciones] ([id_tipo_operacion])
GO
ALTER TABLE [dbo].[Operaciones] CHECK CONSTRAINT [FK_Operaciones_Tipos_opereciones1]
GO
USE [master]
GO
ALTER DATABASE [VirtualWallet] SET  READ_WRITE 
GO
