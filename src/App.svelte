<script>
	
	
    import {params} from "@stores/params";
    import {dataSongsGenres, myData, dataSongsDecades, dataPersonal, corrMatrixDecades, spotifyUsers} from "@stores/data";
    import Header from "@components/Header.svelte";
    import Sources from "@components/Sources.svelte";

    import ColumnChart from '@views/ColumnChart/ColumnChart.svelte';
    import Words from "@components/Words.svelte"; 
    import HeatMap from "@components/Plot/HeatMap.svelte";
    import HeatMapSVG from "@components/Plot/HeatMapSVG.svelte";
    import Quote from "@components/Quote.svelte";
    //import Scatter from "@components/Charts/Scatter.svg.svelte";
    
    import Plot from '@components/Plot/example.svelte'
    import CountPlotMode from '@components/Plot/CountPlotMode.svelte'
    import PlotLine from "@components/Plot/PlotLine.svelte";
    import BarPlot from "@components/Plot/BarPlot.svelte";
    import PieChart from "@components/Plot/PieChart.svelte";

    const title = $params.title;
    const subtitle = $params.subtitle;    
    const sources = $params.sources;

    import Image from '@components/Image.svelte'
    
    /* let appData, appDecades

    $: {      
        appData = data ? data : [];         
        console.log("appData > sections", appData);
 

     } */
  $: console.log("data",dataSongsGenres)
  $: console.log("users",spotifyUsers, spotifyUsers.data)
  $: console.log("my Data",myData)
  $: console.log("data personal", dataPersonal)
  $: console.log("data decades", dataSongsDecades)
  $: console.log("corr matrix data decades", corrMatrixDecades)

</script>
<!--TODO hover y ejemplo de canción de ese género-->


<div data-type="graphics-svelte-app">

    <Header title="¿Cuánto me ha afectado crecer entre Kurt Cobain y Bananarama?" tipo="p"/>
    <article>
    <h2><i>O por qué hablar de la evolución de la cultura musical en occidente, cuando podemos hablar de mí.</i></h2>
    <!--Quote text="Uno de los riesgos más generalizados de la era de la información, es que, a medida que crece la cantidad de conocimiento existente en el mundo, se puede ensanchar la brecha entre lo que sabemos y lo que creemos saber" author="Nate Silver, 'La señal y el ruido'"></Quote-->

    <div style="background-color:green">
      <Header title="¿Quieres probar con tu cuenta?"/>
    </div>
    <div>
      <p>Spotify tiene 406 millones de usuarios activos mensuales. El 30% están en Europa, y no hay datos de Asia o África, partamos de este punto para el análisis</p>
      <BarPlot options = {spotifyUsers? spotifyUsers: []} />
      
      <a href="https://es.statista.com/estadisticas/1118343/distribucion-de-usuarios-activos-mensuales-de-spotify-por-region/">Statista 2023</a>
      
      <p>Spotify tiene una API a través de la cual podemos acceder a diferentes características de cada canción</p>
      <p>No sólo nos da información sobre título, autores o género, también podemos acceder a parámetros como el tipo de acorde que predomina en la canción o las secciones que la conforman</p>
      <Header title="Acordes mayores y menores"/>
      <p>Podemos saber, por ejemplo, si una canción tiene predominio de acordes mayores</p>
      <p>Los acordes mayores transmiten optimismo, los menores, sin embargo, transmiten melancolía o tristeza</p>
      <p>Lo vamos a entender mejor a través de un ejemplo</p>
      <p>TODO gráfico estático ilustrado</p>
      <Image src="src/img/ejemplo_acordes_mayores.png"/>
      
      

    </div>
   
   
    <Header title="Si occidente tuviera una cuenta de Spotify, ¿qué ha escuchado desde los 40?"/>
    <p>Siguiendo con los acordes, he seleccionado una de las playlist que dicen mostrar los grandes éxitos musicales desde los años 40</p>
    <p>Esta selección está centrada en gustos y consumo occidental</p>

    <Header title="Géneros más repetidos"/>
    <!--TODO acordeón para agrupar géneros--->
    TOOLTIP QUE MUESTRE LAS CANCIONES
    <div class="charts" style="display:flex">
      <!--Words data={$data ? $data.data : []}/-->
     
    </div>
    <BarPlot options = {dataSongsGenres? dataSongsGenres: []}/>
   <!--  <Header title="Géneros más repetidos"/>
    <div class="charts" style="display:flex">
      <ColumnChart data={$data ? $data.data : []}/>
    </div> -->
    <Header title="Predominan acordes mayores "/>
    
    <CountPlotMode options={{ x: { dataSongsDecades }, grid: true }} />
    <Header title="Evolución, historia y acordes menores"/>    
    <p>Se podrían marcar varios periodos históricos que coindiden con subidas o bajadas de energína.</p>
    <PlotLine options={{ x: { dataSongsDecades }, grid: true }} />
    <Header title="Correlacion entre parametros"/>
    <p>A parte de la clave, mayor o menor, existen más parámetros que podemos explorar, como ya vimos antes por ejemplo, la energía</p>
    <p>A continuación podemos ver los parámetros y la relación que guardan entre ellos</p>
    <p>Algunos son bastante intuitivos, como la bailabilidad y la energía, que están altamente relacionados, y todo lo contrario ocurre con el modo (mayor o menor)</p>
    <HeatMap options = {{x: {corrMatrixDecades}, grid:true}} />
    <!--HeatMapSVG options = {{x: {corrMatrixDecades}, grid:true}} /-->
    
    <Header title="Mis géneros más repetidos"/>
    <p>Por curiosidad exploré mi cuenta, que abrí en el 2013, y me llevé algunas sorpresas.</p>
    <p>Esta sería la lista de géneros que yo hubiese enumerado: </p>
    <div>
      <li>Rock Psichodélico</li>
      <li>New Wave</li>
      <li>Punk español</li>
      <li>Synth-pop</li>
      <li>Dark wave</li>
      <li>Música Industrial</li>
      <li>Rock electrónico</li>
      <li>Nostalgia</li>   
    </div>
    <p>Siguiendo el mismo método empleado con la lista del occidente mainstream desde los 40, llegué a estos resultados.</p>
    <div>
      <BarPlot options = {myData ? myData : []}/>
   
      <!--HeatMap data={myData ? myData : []}/-->
    </div>

    <Header title="Hay más acordes menores que en la lista mainstream"/>

    <CountPlotMode options={{ x: { dataPersonal }, grid: true }} />
    <div>
      <!-- <Scatter  data={myData ? myData : []}></Scatter> -->
      <h1>histograma?</h1>
    </div>
    <div class="charts" style="display:flex">
      
      <!--Words data={myData ? myData : []}/--> 
    </div>
  
  
  <div>
    
    <Header title="Evolución, historia y acordes menores"/>
    <PlotLine options={{ x: { dataPersonal }, grid: true }} />
    <div style="height:150px"></div>
    
  </div>
  <Header title="% DE COINCIDENCIA CON MI IDEA preconcevida"/>
  <h1>SANSKY?</h1>
  <div>
    <div style="height:150px"></div>
  </div>
  <Header title="¿Intento adivinar qué pasará en un año?"/>
  <div>
    ¿Intento adivinar qué pasará en un año?
    <div style="height:150px"></div>
  </div>

  <div>
    <Header title="Conclusión"/>
    <div style="height:150px"></div>
  </div>

    <Sources {sources}/>
  </article>

  <p>¿Y a tí que tipo de música te gusta? Todo menos el country a excepción de Johny Cash, todo menos el reaggeton, el reaggeton, electrónica, hay mil maneras de contestar
    a esta pregunta, unas se repiten más que otras, según dónde estemos y con quien hablemos
  </p>
  <p>
    Dice mucho de nosotros la música que escuchamos, pero también da mucha información
    la música con la que nos identificamos, la que creemos que nos representa y quizás, tambien, 
    la que decimos que nos representa porque, ¿son siempre lo mismo?
  </p>
</div>

<style lang="scss">
  @import "scss/main.app";

  div[data-type="graphics-svelte-app"] {
    @extend %appDimensions;
    @extend %baseColors;
    @extend %baseFont;

    margin: 10 auto;
  }

  article{
    margin: 1rem;
  }

</style>
