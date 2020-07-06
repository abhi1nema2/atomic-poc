# atomic-poc
Webpack to share modules/chunks with other Webpack for monoRepo

Hero => atomic => async/ hero.css 
dep jeep/atomic/
jeep/hero.css

    component/UCL/Hero: @gg/hero
    component/UCC/Button: @gg/button
    component/EP/EnginePerfomance: @gg/engine-performance (enginePerformance.js)
    src/components/UCT/Configurators: @gg/configurators

    src/
    import component/UCC/Button = @gg/button
    resolve component/UCC/Button = @gg/button ( add along with global-mapping.js )

    AEM
    react/async => root pipeline
    react/atomic => package pipeline

    Carousel => @gg/button

    root webpack externals should have @gg/button
    Carousel.js { @gg/button }


    Hero => B&P 
    dep Hero -> B&P

    loaders 