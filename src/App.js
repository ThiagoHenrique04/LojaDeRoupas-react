import bolsaNikeGym from './static/bolsa nike gym club.jpeg';
import camisaCity from './static/camisa city.jpeg';
import camisaPalmeiras from './static/camisa-palmeiras.jpeg';
import camisaEssentials from './static/camiseta essentials.jpeg';
import camisaNikeBreathe from './static/camiseta nike breathe.jpeg';
import gifDestaque from './static/gif-destaque.gif';
import logo from './static/Logo.png';
import short3Listras from './static/short 3 listras.jpeg';
import tenisReinvention from './static/tenis reinvention.jpeg';
import tenisZoomx from './static/tenis zoomx nike.jpeg';
import tenisInfantilPuma from './static/tenis-infantil-puma.jpeg';
import header from './static/header.jpg';
import jaquetaTiro21 from './static/jaqueta tiro 21.jpeg';
import { Body, CardWrapper9, CardWrapper8, CardWrapper7, CardWrapper6, CardWrapper5, CardWrapper4, TextPromocoes, TextNovidades, TextPopulares, CardWrapper3, CardWrapper2, CardWrapper1, GifImage, Entrar, Gif, Logo, Menu, Title } from './styles';

function App() {
  return (
    <div className="App">
      <Menu>
        <Logo>
          <img src={logo} className="App-logo" alt="logo" />
        </Logo>
        <Entrar href="https://wipsites.com.br">
          Entrar
        </Entrar>
      </Menu>


      <Body>

        <Title>
          <i><b> O conforto perfeito para o seu dia</b></i>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nibh ante, sagittis sed odio nec,
            tristique tincidunt tellus. Mauris pellentesque nulla quis metus suscipit consequat. Proin libero sem,
            semper sed eros et, aliquet dapibus lacus.
          </p>


        </Title>

        <Gif>
          <GifImage src={gifDestaque} className="App-logo" />
        </Gif>

        <TextPopulares>
          <i>POPULARES</i>
        </TextPopulares>


        <CardWrapper1>

          <img src={camisaPalmeiras} className="App-logo" alt="logo" />


          <h3>Camisa Palmeiras 2023</h3>
          <p>
            <b>349,99</b>
          </p>

        </CardWrapper1>

        <CardWrapper2>
          <img src={bolsaNikeGym} className="App-logo" alt="logo" />

          <h3>bolsa nike gym club</h3>
          <p>
            <b>329,99</b>
          </p>

        </CardWrapper2>


        <CardWrapper3>

          <img src={tenisInfantilPuma} className="App-logo" alt="logo" />

          <h3>TENIS RS-X KIDS X PAW PATROL</h3>
          <p>
            <b>450,00</b>
          </p>

        </CardWrapper3>


        <TextNovidades>
          <i>NOVIDADES</i>
        </TextNovidades>

        <CardWrapper4>

          <img src={camisaNikeBreathe} className="App-logo" alt="logo" />

          <h3>camiseta nike breathe</h3>
          <p>
            <b>120,00</b>
          </p>

        </CardWrapper4>

        <CardWrapper5>

          <img src={tenisZoomx} className="App-logo" alt="logo" />

          <h3>Tênis ZoomX Run Flyknit 3</h3>
          <p>
            <b>1499,99 </b>
          </p>

        </CardWrapper5>

        <CardWrapper6>
          <img src={jaquetaTiro21} className="App-logo" alt="logo" />
          <h3>jaqueta tiro 21</h3>
          <p>
            <b>499,99</b>
          </p>

        </CardWrapper6>

        <TextPromocoes>
          <i>PROMOÇÕES</i>
        </TextPromocoes>

        <CardWrapper7>

          <img src={camisaEssentials} className="App-logo" alt="logo" />

          <h3>camiseta essentials</h3>
          <p>
            <s class="promo2">R$ 119,99 </s> <b>R$ 99,99 </b>
          </p>

        </CardWrapper7>

        <CardWrapper8>

          <img src={tenisReinvention} className="App-logo" alt="logo" />
          <h3>tenis reinvention</h3>
          <p>
            <s className="promo1">R$ 1899,99 </s> <b>1699,99</b>
          </p>

        </CardWrapper8>

        <CardWrapper9>
          <img src={short3Listras} className="App-logo" alt="logo" />
          <h3>short 3 listras</h3>
          <p>
            <s className="promo3">R$ 92,99 </s> <b>R$ 72,99 </b>
          </p>

        </CardWrapper9>





      </Body>
    </div>
  );
}

export default App;
