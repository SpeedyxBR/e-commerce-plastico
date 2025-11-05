const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    // Limpeza para evitar duplicações ao rodar o seed múltiplas vezes
    await prisma.product.deleteMany();
    await prisma.category.deleteMany();

    const embalagensCategory = await prisma.category.create({
      data: {
        name: "Embalagens Ecológicas",
        slug: "embalagens-ecologicas",
        imageUrl:
          "https://utfs.io/f/857ace02-31c2-43ae-a6f3-7d97b0cb279a-e7tkok.png",
      },
    });

    const embalagens = [
      {
        name: "Pote Plástico Redondo 1L",
        slug: "pote-plastico-redondo-1l",
        description:
          "Feito em PP reciclável (nº5), livre de BPA, resistente e reutilizável. Ideal para reduzir desperdício e incentivar o reuso. 100% reciclável ao fim da vida útil.",
        imageUrls: [
          "https://utfs.io/f/baccd841-5118-4a43-b7d9-557effb39e03-otetkp.png",
          "https://utfs.io/f/74ce5572-0cd2-4e90-a4b2-b982fb968e93-x6ep3u.png",
          "https://utfs.io/f/0a79c814-eb1b-49cf-a8cf-073b69f2bfb4-thphc5.png",
          "https://utfs.io/f/8453c879-dd66-41ff-b686-f564af33f324-l4plt0.png",
        ],
        basePrice: 650,
        categoryId: embalagensCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pote Hermético 2,4L",
        slug: "pote-hermetico-2-4l",
        description:
          "Sistema hermético que prolonga a conservação dos alimentos, diminuindo o descarte. Material PP reciclável e livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/ffb6d4e3-acce-476d-ac30-52d76071a089-idaumz.png",
          "https://utfs.io/f/dee9af33-6c1b-4ec4-b239-31065984a254-40f9t2.png",
          "https://utfs.io/f/8c82989e-5a24-421e-b56d-a87d526ba5c1-qe5e93.png",
          "https://utfs.io/f/a366c05e-27ec-4e1c-8d2f-7e3cc740ce78-m98ja0.png",
        ],
        basePrice: 750,
        categoryId: embalagensCategory.id,
        discountPercentage: 5, // 5% discount
      },
      {
        name: "Pote Retangular 500ml",
        slug: "pote-retangular-500ml",
        description:
          "Compacto e prático para porções. Reutilizável, fácil de higienizar e 100% reciclável.",
        imageUrls: [
          "https://utfs.io/f/3e2a7283-683f-43b5-a2c0-c64b5890a084-6pfvtn.png",
          "https://utfs.io/f/05c62fd7-1aa9-46c0-9f81-29a92e330309-t3609o.png",
          "https://utfs.io/f/b38e5709-6583-4c48-8f24-5762b18e76d7-jk7x9f.png",
          "https://utfs.io/f/409af6e8-8c08-4afd-9615-a79c7f5f69cd-2ti76m.png",
        ],
        basePrice: 300,
        categoryId: embalagensCategory.id,
        discountPercentage: 15, // 15% discount
      },
      {
        name: "Kit Marmita 3 Peças",
        slug: "kit-marmita-3-pecas",
        description:
          "Conjunto durável para refeições fora de casa. Diminui o uso de embalagens descartáveis. PP livre de BPA e reciclável.",
        imageUrls: [
          "https://utfs.io/f/c5200bd8-10b5-49bd-be72-deca34b2335a-1xd5uq.png",
          "https://utfs.io/f/78bbbd0e-70ff-4970-b733-c34ef56abde0-2xbhct.png",
          "https://utfs.io/f/9d12ba27-9dd0-48e9-84c1-a6297eeab4ff-7s04kc.png",
          "https://utfs.io/f/322954c1-5ced-4296-8e87-a6ea266904ae-cmorrv.png",
        ],
        basePrice: 600,
        categoryId: embalagensCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Pote Organizador 5L",
        slug: "pote-organizador-5l",
        description:
          "Ideal para organizar e aumentar a vida útil de mantimentos. Fabricado com PP reciclável, resistente e livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/182f9c0c-ba17-4b30-bf29-e086817ead3f-5jk68j.png",
          "https://utfs.io/f/7b3840df-3dac-4237-a244-d5d5d9c18594-m16w6s.png",
          "https://utfs.io/f/e6746f09-4afa-45e5-b7f0-fc9a0eae3e79-wiafu3.png",
          "https://utfs.io/f/4276b0c3-6ee7-47bc-8c51-04259992f4a4-g0npvu.png",
        ],
        basePrice: 350,
        categoryId: embalagensCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: embalagens,
    });

    const descartaveisCategory = await prisma.category.create({
      data: {
        name: "Descartáveis Sustentáveis",
        slug: "descartaveis-sustentaveis",
        imageUrl:
          "https://utfs.io/f/f9f5bf3e-ebdd-49ea-b983-92f930f9afab-7zu99x.png",
      },
    });

    const descartaveis = [
      {
        name: "Copo Plástico 200ml",
        slug: "copo-plastico-200ml",
        description:
          "Copo reciclável, livre de BPA, ideal para eventos conscientes. Compatível com reciclagem pós-uso quando descartado corretamente.",
        imageUrls: [
          "https://utfs.io/f/80787132-a9cb-41ce-ae4d-5c38b359723d-33zg48.png",
          "https://utfs.io/f/10b3a1b3-f3f2-4fba-a009-af9e2ccc4ed7-ausijr.png",
          "https://utfs.io/f/030c927c-3341-48b0-839d-65fa2fcb2be9-otkh7q.png",
          "https://utfs.io/f/1e030d68-5443-4d33-b408-b772b319b9ab-w8rm3f.png",
        ],
        basePrice: 650,
        categoryId: descartaveisCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Prato Descartável 18cm (100u)",
        slug: "prato-descartavel-18cm-100u",
        description:
          "Prato leve e resistente. Opção com menor uso de material por unidade e reciclável conforme diretrizes locais.",
        imageUrls: [
          "https://utfs.io/f/834b0e30-45bc-47dd-b2c1-bfe65ef62eb2-m9yl8y.png",
          "https://utfs.io/f/e651e1be-734a-4847-976e-b54979290830-du02k1.png",
          "https://utfs.io/f/2c3788e1-8a8c-4672-af73-d2d3d5878d16-5e1jv4.png",
          "https://utfs.io/f/90822af7-89cf-4f82-9f8d-cede02239072-31wytt.png",
        ],
        basePrice: 750,
        categoryId: descartaveisCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Talher Descartável (100u)",
        slug: "talher-descartavel-100u",
        description:
          "Talheres de uso prático com menor gramatura por peça para otimizar recursos. Plástico reciclável quando corretamente descartado.",
        imageUrls: [
          "https://utfs.io/f/9e89c3ab-334b-4e4f-bc9a-6aa2baeeb9c3-u67teu.png",
          "https://utfs.io/f/46081918-deac-4a8b-a082-caba99ff7b57-58nqzp.png",
          "https://utfs.io/f/ce638b00-b423-476c-a631-2a5977aa9816-jowbfg.png",
          "https://utfs.io/f/f7af860a-64d3-4221-acde-51ad510b898b-qeno4j.png",
        ],
        basePrice: 440,
        categoryId: descartaveisCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Guardanapo de Papel (50u)",
        slug: "guardanapo-de-papel-50u",
        description:
          "Guardanapos provenientes de fibras de fontes responsáveis. Embalagem otimizada para reduzir volume e transporte.",
        imageUrls: [
          "https://utfs.io/f/1c84b35c-a523-4ec5-afab-07717bfb3bc0-tbfuuf.png",
          "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
          "https://utfs.io/f/125ccdc0-9845-43cc-ade4-31dab27d8815-fsmt9h.png",
          "https://utfs.io/f/2646c695-127e-43c7-b9e6-8785ae04d775-918ah0.png",
        ],
        basePrice: 700,
        categoryId: descartaveisCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Toalha de Papel (2 rolos)",
        slug: "toalha-de-papel-2-rolos",
        description:
          "Rolos com alto rendimento para reduzir trocas e desperdício. Papel proveniente de manejo responsável.",
        imageUrls: [
          "https://utfs.io/f/a9a8150a-0fd8-4fa8-a30f-f11aaf90e07d-t8tglh.png",
          "https://utfs.io/f/cb2f3dac-63b3-4bad-baf5-316094d3f10c-4b9e6c.png",
          "https://utfs.io/f/697f9e83-d983-4e17-b75c-057f16b57b6c-kmao8t.png",
          "https://utfs.io/f/cba48ecb-4f08-48c6-9a18-574cd3cd9271-ph9bb6.png",
        ],
        basePrice: 500,
        categoryId: descartaveisCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Saco de Lixo 50L (20u)",
        slug: "saco-de-lixo-50l-20u",
        description:
          "Fabricado com filme de alta resistência para evitar rasgos e trocas frequentes. Embalagem com menor volume para otimizar logística.",
        imageUrls: [
          "https://utfs.io/f/51bbaaa2-b3d8-49e8-b2e3-46f833218186-b14pyz.png",
          "https://utfs.io/f/82a02e42-e7fe-437b-b534-d86404bdb006-7jaqka.png",
          "https://utfs.io/f/57225d52-9e6a-4144-8337-c5dd20cbdca6-41gr5l.png",
          "https://utfs.io/f/0f8ebb24-7818-4243-95b6-c7948688c074-jmrqw.png",
        ],
        basePrice: 400,
        categoryId: descartaveisCategory.id,
        discountPercentage: 25, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: descartaveis,
    });

    const utensiliosCategory = await prisma.category.create({
      data: {
        name: "Utensílios Sustentáveis",
        slug: "utensilios-sustentaveis",
        imageUrl:
          "https://utfs.io/f/42bb73b3-4a24-4542-aee4-12fa68014dc3-e7tkon.png",
      },
    });

    const utensilios = [
      {
        name: "Peneira Plástica",
        slug: "peneira-plastica",
        description:
          "Utensílio leve, durável e reutilizável. Produzido em PP reciclável, livre de BPA, pensado para reduzir o consumo de descartáveis.",
        imageUrls: [
          "https://utfs.io/f/e0f86a80-3156-4327-bb51-2a421e3eeabc-cuwa00.png",
          "https://utfs.io/f/c925ee13-366e-4623-8395-1e85592a5ffc-guymjj.png",
          "https://utfs.io/f/59c43701-1214-48c9-8a6b-7c7c60aa93de-ogaiw2.png",
          "https://utfs.io/f/5191ae2c-283b-4562-9165-45bcfe12f88a-59kdnh.png",
        ],
        basePrice: 750,
        categoryId: utensiliosCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Concha Plástica",
        slug: "concha-plastica",
        description:
          "Alta resistência e longa vida útil, evitando substituições frequentes. Material PP reciclável e seguro para alimentos.",
        imageUrls: [
          "https://utfs.io/f/f86c9598-6782-4f91-8161-c3d9d746147a-cnu60s.png",
          "https://utfs.io/f/e2d2840f-de45-45a5-89ba-724d4cb416f6-x8xsfx.png",
          "https://utfs.io/f/13ce6f4b-bbdd-459e-a77d-f8b1cf9248c4-h72n42.png",
          "https://utfs.io/f/c6b472fb-2f40-4794-a2c3-acb159a3acc3-3e0zb3.png",
        ],
        basePrice: 1200,
        categoryId: utensiliosCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Escorredor de Macarrão",
        slug: "escorredor-de-macarrao",
        description:
          "Melhora a eficiência na cozinha e reduz o uso de água ao escorrer massas rapidamente. PP reciclável e livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/4242f20f-a15e-498f-9039-44f183847e0d-3us24m.png",
          "https://utfs.io/f/82c74203-cf79-466e-9510-8ff5efe5d197-4l6gkb.png",
          "https://utfs.io/f/c93832d7-adcd-419c-8030-591a444a3e3d-d14z98.png",
          "https://utfs.io/f/cc70de0f-a415-4876-8777-54c195a315f9-lh3hy5.png",
        ],
        basePrice: 1500,
        categoryId: utensiliosCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Espátula Plástica",
        slug: "espatula-plastica",
        description:
          "Peça versátil e durável para preparo e serviço, minimizando necessidade de trocas. PP reciclável, livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/7b44e130-1bb2-4838-85ac-e8d78a402559-l6h1vy.png",
          "https://utfs.io/f/8e30cca7-1c73-4408-93b0-47f848036c75-cth6ct.png",
          "https://utfs.io/f/add1fe25-4246-49b6-bc38-bb361d81435f-4ghato.png",
          "https://utfs.io/f/be26c88e-abc5-4579-b04e-31d9102f44a2-3wikph.png",
        ],
        basePrice: 550,
        categoryId: utensiliosCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Ralador Plástico",
        slug: "ralador-plastico",
        description:
          "Design pensado para rendimento e segurança. Prolonga a vida útil e reduz descarte. PP reciclável.",
        imageUrls: [
          "https://utfs.io/f/0b8199d2-2cd8-4927-86e3-d10ffc364403-oxvmyz.png",
          "https://utfs.io/f/0c95dce8-39d5-46cf-9132-f4a5c5466db7-ghx4a2.png",
          "https://utfs.io/f/1fffc6b5-66e7-4e1e-bfb3-d7e138d60dd6-81yll5.png",
          "https://utfs.io/f/2bec72be-a9cb-4627-b90a-7c8a55107152-dzx3s.png",
        ],
        basePrice: 250,
        categoryId: utensiliosCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Pegador de Salada",
        slug: "pegador-de-salada",
        description:
          "Acessório multifuncional para servir com praticidade. Reutilizável, fácil de higienizar e 100% reciclável.",
        imageUrls: [
          "https://utfs.io/f/6c91e18d-4148-4495-955b-46281aaaaed0-pbckc3.png",
          "https://utfs.io/f/7ee6e7f5-9fe7-4226-9116-4eab3da7c5c6-xocfv8.png",
          "https://utfs.io/f/b7593a80-238b-4d59-b996-5186dac3aa88-szrqkr.png",
          "https://utfs.io/f/89677788-43d8-48ed-ba32-b10ed8d93415-kmrv1m.png",
        ],
        basePrice: 200,
        categoryId: utensiliosCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: utensilios,
    });

    const organizacaoCategory = await prisma.category.create({
      data: {
        name: "Organização Sustentável",
        slug: "organizacao-sustentavel",
        imageUrl:
          "https://utfs.io/f/5f889f93-7446-4da7-bc6b-4926c85997f9-e7tkom.png",
      },
    });

    const organizacao = [
      {
        name: "Caixa Organizadora 30L",
        slug: "caixa-organizadora-30l",
        description:
          "Produzida com 30% de plástico reciclado pós-consumo (PCR). Durável, reutilizável e 100% reciclável ao fim do uso.",
        imageUrls: [
          "https://utfs.io/f/b8585eb2-bc88-4ebf-af0a-decdfb8d59fa-on5ldd.png",
          "https://utfs.io/f/6a1b20e2-00bf-4805-acff-e51977ea131c-x3442a.png",
          "https://utfs.io/f/0dfc4a23-6ca9-43e2-b240-d7d7d937f544-ti1f7x.png",
          "https://utfs.io/f/041bfa51-af8d-4af8-9ec6-ca3536786ad3-l22wj0.png",
        ],
        basePrice: 950,
        categoryId: organizacaoCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Gaveteiro Plástico 3 Andares",
        slug: "gaveteiro-plastico-3-andares",
        description:
          "Estrutura leve e resistente para longa vida útil. 30% PCR e reciclável, reduzindo demanda por material virgem.",
        imageUrls: [
          "https://utfs.io/f/3b387596-f854-438d-85e1-faab21e83d36-n9raei.png",
          "https://utfs.io/f/65e9ebe8-09a7-4c61-9797-08633719c1dc-1nss0n.png",
          "https://utfs.io/f/18b56460-98b2-4676-adf3-2e772b685f6e-qlcufs.png",
          "https://utfs.io/f/aad65548-3410-4844-8474-ba5c94643d53-ji7547.png",
        ],
        basePrice: 150,
        categoryId: organizacaoCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Cesto Organizador Pequeno",
        slug: "cesto-organizador-pequeno",
        description:
          "Organiza pequenos itens e evita compras duplicadas, reduzindo desperdício. Plástico reciclável e de longa duração.",
        imageUrls: [
          "https://utfs.io/f/dd74b5ce-8fc4-4a59-8924-35039db43a09-culmza.png",
          "https://utfs.io/f/5f6d9368-d639-4bca-b12c-85251d15f529-gv99k9.png",
          "https://utfs.io/f/34529fd8-1ac4-4911-b6fb-054626051825-ofzvvc.png",
          "https://utfs.io/f/588de6a4-d739-4502-a494-0f4f47ca3fbd-59v0o7.png",
        ],
        basePrice: 200,
        categoryId: organizacaoCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Organizador de Gaveta",
        slug: "organizador-de-gaveta",
        description:
          "Módulos para otimizar espaço e reduzir a necessidade de novos móveis. Material reciclável e de alta durabilidade.",
        imageUrls: [
          "https://utfs.io/f/36f714be-bd91-4786-a883-1ca459df92ea-k45quc.png",
          "https://utfs.io/f/62df3fba-54f0-4b73-a6e3-8ce80febcf72-dcr81v.png",
          "https://utfs.io/f/a095e6e3-e08c-42a4-a07a-0d3719d1a3d7-6lcp9e.png",
          "https://utfs.io/f/1ff38054-13eb-408d-81e9-4bb64e467e03-61tj3.png",
        ],
        basePrice: 250,
        categoryId: organizacaoCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Organizador de Sapatos",
        slug: "organizador-de-sapatos",
        description:
          "Amplia a vida útil dos calçados ao evitar deformações. Plástico reciclável e reutilizável.",
        imageUrls: [
          "https://utfs.io/f/72221936-9db3-4f7b-989e-68f47742b8da-x7k2s6.png",
          "https://utfs.io/f/fa414332-d06e-4294-8cdb-0f4545d4649d-zcern9.png",
          "https://utfs.io/f/ca56bb07-bfb9-481a-af57-3814b8e6e432-xjulgs.png",
          "https://utfs.io/f/a2ea409c-5bea-45e9-b35e-e529ec7a8fa2-vezwlp.png",
        ],
        basePrice: 300,
        categoryId: organizacaoCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Porta-Objetos Multiuso",
        slug: "porta-objetos-multiuso",
        description:
          "Multiuso para casa e escritório, reduzindo compras desnecessárias. Reciclável e de longa vida útil.",
        imageUrls: [
          "https://utfs.io/f/c076401e-8850-48bd-86f1-ed183473f03b-x7tx5v.png",
          "https://utfs.io/f/c4291b68-6aea-44b1-b813-d6000d07c445-zcom0y.png",
          "https://utfs.io/f/ffae5803-44bd-4a61-ba7e-6d2bca6749f0-xjkr33.png",
          "https://utfs.io/f/b842e2d0-cc20-4c8e-851e-4493670841a5-veq280.png",
        ],
        basePrice: 300,
        categoryId: organizacaoCategory.id,
        discountPercentage: 5, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: organizacao,
    });

    const limpezaCategory = await prisma.category.create({
      data: {
        name: "Limpeza Sustentável",
        slug: "limpeza-sustentavel",
        imageUrl:
          "https://utfs.io/f/7cbf0652-7cdc-468f-9d83-f80a9b0c2c73-11uae7.png",
      },
    });

    const limpeza = [
      {
        name: "Balde Plástico 10L",
        slug: "balde-plastico-10l",
        description:
          "Balde resistente e reutilizável para reduzir substituições. Plástico reciclável, projetado para longa vida útil.",
        imageUrls: [
          "https://utfs.io/f/01157cd9-cd59-43ad-9b84-6fe5419aecb4-l17xro.png",
          "https://utfs.io/f/d97cf538-043d-4cb1-814d-3d79d76ff7e2-te7tat.png",
          "https://utfs.io/f/f6172b7c-f0b3-4f52-8d62-8cc1656bc114-x9wd56.png",
          "https://utfs.io/f/b080961c-872e-4fb1-aaae-6b363493ead3-owwhm1.png",
        ],
        basePrice: 1500,
        categoryId: limpezaCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Pá de Lixo Plástica",
        slug: "pa-de-lixo-plastica",
        description:
          "Formato que facilita a coleta sem desperdício. Produzida em PP reciclável e de alta durabilidade.",
        imageUrls: [
          "https://utfs.io/f/b61bd487-0e18-4f87-9153-fb8c09faab66-rax9q4.png",
          "https://utfs.io/f/2a01b145-b299-48ae-923f-d784e1471ff6-w5lwxn.png",
          "https://utfs.io/f/e3d6f6a4-7d88-482f-b74c-9eb1f0902571-y0thty.png",
          "https://utfs.io/f/2667bb2f-f8ec-4126-bc22-9892f0f599ef-t64umf.png",
        ],
        basePrice: 2000,
        categoryId: limpezaCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Vassoura Plástica",
        slug: "vassoura-plastica",
        description:
          "Cerdas eficientes para maior rendimento na limpeza, reduzindo esforço e tempo. Cabo e corpo em PP reciclável.",
        imageUrls: [
          "https://utfs.io/f/dde7ea20-ad12-45bb-9310-008dc46897d4-60cp0c.png",
          "https://utfs.io/f/ae7beb12-ac74-4294-9aa6-66fc702d97ab-2cn6it.png",
          "https://utfs.io/f/0d6c9922-bdec-4369-bbf8-9f9a6368bd97-apn21y.png",
          "https://utfs.io/f/14d925f4-b203-4063-adc1-be14f2d029c1-j2mxl3.png",
        ],
        basePrice: 2500,
        categoryId: limpezaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Rodo Plástico",
        slug: "rodo-plastico",
        description:
          "Lâmina que remove água rapidamente, economizando produto de limpeza e tempo. PP reciclável.",
        imageUrls: [
          "https://utfs.io/f/c36e0bab-e635-4213-8f93-c48761871e80-1wl9gu.png",
          "https://utfs.io/f/42454c14-ccec-4e7f-a8e6-cf5f67d73e26-qu5bvz.png",
          "https://utfs.io/f/a1b5e99b-72fd-4472-887e-c563fee2e469-j9eno0.png",
          "https://utfs.io/f/68f08f60-df7f-48a0-929c-27356559782f-5o5er5.png",
        ],
        basePrice: 3200,
        categoryId: limpezaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Escova Plástica",
        slug: "escova-plastica",
        description:
          "Cerdas firmes e cabo ergonômico para maior durabilidade e conforto. PP reciclável.",
        imageUrls: [
          "https://utfs.io/f/dee01030-d114-4a76-8d85-8ad6d11d5304-yi0au.png",
          "https://utfs.io/f/2c9c9a7a-f81c-4eb7-882e-80e45cd69044-pw22pz.png",
          "https://utfs.io/f/87cd76a7-b385-4b68-a654-d1199ee61c5e-k7hwu0.png",
          "https://utfs.io/f/b0d742e2-28ed-49bc-977f-b20b2de9a0bd-4q25l5.png",
        ],
        basePrice: 3500,
        categoryId: limpezaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Suporte para Esponja",
        slug: "suporte-para-esponja",
        description:
          "Mantém a pia organizada e seca, aumentando a vida útil das esponjas. Plástico reciclável e fácil de limpar.",
        imageUrls: [
          "https://utfs.io/f/faaed1da-1d16-4839-8373-7eb813e46dc8-al6r5z.png",
          "https://utfs.io/f/8de1bedc-06a0-47a2-9441-f49a217612ff-zid8e0.png",
          "https://utfs.io/f/15e1f730-ed3a-4bbf-93cb-2cd9992ecfcd-akt5yv.png",
          "https://utfs.io/f/d631cbaf-471e-40cc-be9e-7dd62a1c88bc-ecqwga.png",
        ],
        basePrice: 4200,
        categoryId: limpezaCategory.id,
        discountPercentage: 10, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: limpeza,
    });

    const cozinhaCategory = await prisma.category.create({
      data: {
        name: "Cozinha Sustentável",
        slug: "cozinha-sustentavel",
        imageUrl:
          "https://utfs.io/f/b73c526a-9e78-444e-8822-7cda6e857b9f-e7tkoj.png",
      },
    });

    const cozinha = [
      {
        name: "Jarra Plástica 2L",
        slug: "jarra-plastica-2l",
        description:
          "Jarra leve e reutilizável para o dia a dia. Produzida em PP atóxico, livre de BPA e 100% reciclável.",
        imageUrls: [
          "https://utfs.io/f/8a4daee1-2182-4f70-8f26-43ee804de8f3-b5j8co.png",
          "https://utfs.io/f/b49c22f5-4df5-4997-a4ff-09fb5486010b-4e4pk7.png",
          "https://utfs.io/f/2faf574c-edc9-4814-b539-e031c20eb5b5-2d9t8a.png",
          "https://utfs.io/f/943d92d3-8bfb-4963-8ec6-7841ac29ed96-94oc0r.png",
        ],
        basePrice: 1200,
        categoryId: cozinhaCategory.id,
        discountPercentage: 5, // 10% discount
      },
      {
        name: "Tigela Plástica Grande",
        slug: "tigela-plastica-grande",
        description:
          "Capacidade generosa e alta durabilidade para reduzir trocas. Material reciclável e livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/fff82151-82d7-4618-9d0d-1fc96b5f8efb-cukwpp.png",
          "https://utfs.io/f/2f52ea57-35f9-43f0-92e7-09fc97c008e2-gv9ztu.png",
          "https://utfs.io/f/f03d7f00-5595-4fe2-b336-f9952d96fe24-ofz5lr.png",
          "https://utfs.io/f/22d1ff6e-9689-439a-a8b5-a9477f80169a-59vqxs.png",
        ],
        basePrice: 4500,
        categoryId: cozinhaCategory.id,
        discountPercentage: 15, // 10% discount
      },
      {
        name: "Potes para Mantimentos (Jogo 5pç)",
        slug: "potes-para-mantimentos-jogo-5pcs",
        description:
          "Conjunto hermético que preserva alimentos por mais tempo, reduzindo desperdício. PP reciclável e livre de BPA.",
        imageUrls: [
          "https://utfs.io/f/a4d4d15c-da43-4f54-a3b9-9487c11ed4b5-o2pxdo.png",
          "https://utfs.io/f/431b923f-b23c-4022-9881-f965407ab41b-j81a65.png",
          "https://utfs.io/f/ffb002da-22f2-49c4-a4a1-8c7e57bc329a-edcmym.png",
          "https://utfs.io/f/00370513-6b55-443b-b45a-fa8f95f6e29f-9inzr3.png",
        ],
        basePrice: 4000,
        categoryId: cozinhaCategory.id,
        discountPercentage: 10, // 10% discount
      },
      {
        name: "Tábua de Corte Plástica",
        slug: "tabua-de-corte-plastica",
        description:
          "Superfície higiênica e durável que dispensa trocas frequentes. Material 100% reciclável.",
        imageUrls: [
          "https://utfs.io/f/78383361-cc0b-4356-bbf3-043f21d5171d-gxgbj0.png",
          "https://utfs.io/f/c4ab1d24-97a6-48a6-9bfb-74b6215711be-5g9sx1.png",
          "https://utfs.io/f/204b5c37-8023-4633-99be-a95b24c34db7-rtzxd2.png",
          "https://utfs.io/f/b5372e93-9dff-4cd5-a112-ab9d258b2856-kte061.png",
        ],
        basePrice: 3200,
        categoryId: cozinhaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Colher de Servir Plástica",
        slug: "colher-de-servir-plastica",
        description:
          "Colher resistente ao calor e reutilizável. Facilita o preparo e substitui itens descartáveis. PP reciclável.",
        imageUrls: [
          "https://utfs.io/f/2576317e-a26b-4586-b7ad-7477031684be-f1tve5.png",
          "https://utfs.io/f/5332ae8f-aec7-4768-9b44-7e0d8b2118a9-q9fa1g.png",
          "https://utfs.io/f/008ea186-9d2e-4996-969e-5621d4d4016b-3gfmi3.png",
          "https://utfs.io/f/8422af22-693c-44cb-992f-13e1f8b81cdd-x6aj1m.png",
        ],
        basePrice: 3500,
        categoryId: cozinhaCategory.id,
        discountPercentage: 0, // 10% discount
      },
      {
        name: "Escorredor de Talheres",
        slug: "escorredor-de-talheres",
        description:
          "Drena rapidamente, evitando mau cheiro e mofo nos talheres. Plástico reciclável e fácil de limpar.",
        imageUrls: [
          "https://utfs.io/f/5e134cd7-e4ec-40aa-ac97-cf63d1eade52-uk14e7.png",
          "https://utfs.io/f/3cc3ce89-2fa5-45bf-931c-818d97371287-wovt9a.png",
          "https://utfs.io/f/a29db5cd-e7c3-44f2-938d-f90a21d993a7-ytqi4d.png",
          "https://utfs.io/f/f3282c27-c987-4420-92cb-ce0673c154f3-y2iuzo.png",
        ],
        basePrice: 2500,
        categoryId: cozinhaCategory.id,
        discountPercentage: 0, // 10% discount
      },
    ];

    await prisma.product.createMany({
      data: cozinha,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
