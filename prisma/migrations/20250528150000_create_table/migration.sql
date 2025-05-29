-- CreateTable
CREATE TABLE `vaga` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `enterprise` VARCHAR(100) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `ability` VARCHAR(191) NOT NULL,
    `local` VARCHAR(255) NOT NULL,
    `contractType` VARCHAR(100) NULL,
    `modality` VARCHAR(100) NOT NULL,
    `amount` INTEGER NOT NULL,
    `areaActivity` VARCHAR(255) NOT NULL,
    `pcd` ENUM('sim', 'não') NOT NULL,
    `cnh` ENUM('A', 'B', 'C', 'D', 'E', 'AB', 'none') NOT NULL DEFAULT 'none',
    `salary` VARCHAR(191) NOT NULL,
    `benefits` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nome_completo` VARCHAR(255) NOT NULL,
    `data_nascimento` DATE NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `cep` VARCHAR(10) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `confirm_senha` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `usuarios_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `empresas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_empresa` VARCHAR(255) NOT NULL,
    `nome_fantasia` VARCHAR(255) NOT NULL,
    `cnpj` VARCHAR(14) NOT NULL,
    `inscricao_estadual` VARCHAR(20) NULL,
    `inscricao_municipal` VARCHAR(20) NULL,
    `telefone` VARCHAR(15) NULL,
    `cep` VARCHAR(10) NULL,
    `endereco` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,
    `senha` VARCHAR(255) NOT NULL,
    `data_cadastro` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `empresas_cnpj_key`(`cnpj`),
    UNIQUE INDEX `empresas_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
