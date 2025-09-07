import { Col, Container, Row } from "react-grid-system";
import { Card } from "./components/Card/Card";
import { Estilos } from "./components/EstilosGlobais/Estilos";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProvedorTema } from "./components/ProvedorTema/ProvedorTema";
import { TextField } from "./components/TextField/TextField";
import Tipografia from "./components/Tipografia/Tipografia";
import { Button } from "./components/Button/Button";
import { Dropdown } from "./Dropdown/Dropdown";

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Header />
      <Container style={{ marginTop: '30px', marginBottom: '30px' }}>
        <Row justify="center">
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variant="h1" component="h1">
                Freelando
              </Tipografia>
              <Tipografia variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col>
                  <TextField title="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                  <Dropdown title="Estado" options={estadosBrasileiros} />
                </Col>
                <Col lg={8} md={8} sm={8}>
                  <TextField title="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <TextField title="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <TextField title="Repita a Senha" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                  <Button variant="secundary">
                    Anterior
                  </Button>
                </Col>
                <Col lg={6} md={6} sm={6}>
                  <div style={{ textAlign: 'right' }}>
                    <Button>
                      Próxima
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </ProvedorTema>
  );
}

export default App;
