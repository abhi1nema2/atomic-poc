# atomic-poc
Webpack to share modules/chunks with other Webpack for monoRepo

Hero => atomic => async/ hero.css 
dep jeep/atomic/
jeep/hero.css

    component/UCL/Hero: @sdp/hero
    component/UCC/Button: @sdp/button
    component/EP/EnginePerfomance: @sdp/engine-performance (enginePerformance.js)
    src/components/UCT/Configurators: @sdp/configurators

    src/
    import component/UCC/Button = @sdp/button
    resolve component/UCC/Button = @sdp/button ( add along with global-mapping.js )

    AEM
    react/async => root pipeline
    react/atomic => package pipeline

    Carousel => @sdp/button

    root webpack externals should have @sdp/button
    Carousel.js { @sdp/button }


    Hero => B&P 
    dep Hero -> B&P

    loaders 