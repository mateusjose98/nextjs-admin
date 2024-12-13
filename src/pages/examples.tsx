import Button from '@/components/template/Button';
import ProductForm from '@/components/template/Form';
import InputText from '@/components/template/InputText';
import Layout from '@/components/template/Layout';
import Table from '@/components/template/Table';
import globalData from '@/data/hooks/useAppData';
import ProductModel from '@/model/Product';

export default function Notification() {
  return (
    <>
      <Layout title="Examples" subheading="This is a subheading!">
        {/* <InputText
          label="Nome"
          value="José Mateus Barros Taveira"
          onChange={() => {}}
        /> */}
        {
          <Button
            className="bg-lime-800 hover:bg-lime-700"
            onClick={() => console.log('Clicou')}
          >
            Clique aqui
          </Button>
        }
        <Table
          onDelete={(data) => {
            console.log('Excluir', data);
          }}
          onEdit={(data) => {
            console.log('Editar', data);
          }}
          data={[
            new ProductModel(
              1,
              'Produto 1',
              10,
              'Descrição do produto 1',
              'https://via.placeholder.com/150',
            ),
            new ProductModel(
              2,
              'Produto 2',
              20,
              'Descrição do produto 2',
              'https://via.placeholder.com/150',
            ),
          ]}
          columns={[
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'Nome' },
            { key: 'price', title: 'Preço' },
            { key: 'description', title: 'Descrição' },
            { key: 'image', title: 'Imagem' },
            { key: 'actions', title: 'Ações' },
          ]}
        />
        <ProductForm onSubmit={(data) => console.log('Formulário', data)} />
        <div className="h-80"></div>
      </Layout>
    </>
  );
}
