import React from 'react'

const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="Food Fire Logo"
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAABHNCSVQICAgIfAhkiAAAAF96VFh0UmF3IHByb2ZpbGUgdHlwZSBBUFAxAAAImeNKT81LLcpMVigoyk/LzEnlUgADYxMuE0sTS6NEAwMDCwMIMDQwMDYEkkZAtjlUKNEABZiYm6UBoblZspkpiM8FAE+6FWgbLdiMAAADsklEQVRYhe2ZTWxUVRTHf+e9N+30Yzr9rikIgiAfC2kHP4guXLgxjUriQhK3xmhcGKI7NWkIitEVkphglBCFpSYaMSYaRXRhKTgNkthQKIiARVtb6EzbmXnz3nExLbbCTN9786pO0n8ym7nn3PPLfe/cc+59MtK9w1FBqACJotYsbEUAq4DxX0P41TLwUmsZeKlVccBW6DPmHMjrvAgCVWZo04cHnLZxhy5j9mxBOhpBFbFMcBWn/3xo0KEA669TmI9upL3/IGa8YcHY6M5dYLv/H2C9OoO1fTPt779509jvT+3EOXoe6awtN8wNlZd0mTxWzyba330DXBd1HNRxyF64yNUnnsf57kKosFDuCkctnO/PcsXaBuRn/xSEemRDK9IWBVdv7SuA+G9hggEr6MAEyjWERoSmm03OpEtENZB7myGT9w3tH1gVd2CY+Lf7qH/oAd/ucxrbvRf7g2MQr/bl5w9YwR04Tcvgp0Q3rvflOl9jr7xFbs9RJBH37esLWAfGaR06QvX6tb4DAbiZLOOvvU1uzzdIojHQHPJbYoeLlwZeFeqqMe9ejU5O+Q2DpmdwPjmJcUcnNEcDwQLqGVgHU+jMJJANGMsAIotb3dla6r1WT6+Emxym/qNeardtDbQVeZVRE+Xa/sPkDnxdFHpRYDd5mqa+D6m9f2vogP/U5Gdfkn35YyTRUdSmZKXT5AhNxw/9O7Cff0Xq8VdLwkKpFU7lqOrdjhGLMZP8KWy+G1Igc6yPzIuHMBKL7z6lky6VQ89OegibB1w/nPMUgZX1SHuNF+NFki5WhSRai49fz+EOX8bs6UKa6wrL5UMSq8EdGkHHpz37BG5+9OcUkWfvo+X1wxh1wTqy3KUrjK16Gun2XkQCtZd6Lo31zD207e0NDvvLJUZXPYJ0xX3dO/kHTttEnnuQ9n27fLvOabrvR0bXPImxZTMY/vZ176V5TqoQtdBTEzDt+ESV2ZY0hnQ3BylC3irdwpgCmTxyV6y4TdZBB8dQUvydiSbGutuRhmBNz5yCHZFECo/yVr/rOaQzRsuZA3Tax+nMn2CFc5IVegLrsS6YtssCDvVeQv/MYGxqo+PIfsRceEoefWk39sF+ZG19WTHCu/mZyWM9vIHbvnhvAaw7Nc0fL/Riv/ND2bAQJOmKyXYwEquRqghqF85qOpEu9MDrVkJDVdkhCJR0xRQxcZMXwZ5X7kzx1B/4Ubh3axHTS49eliru9nIZeKm1DLzUqjhgSxTVivgOWvh0+xfVOTEWv2x4RAAAAABJRU5ErkJggg=='
/>
    </a>
  );

const Navbar = () => {
  return (
    <div>

        <Title />
        <input
          type="text"
          className="search-input"
          placeholder="Searh what you want..."
         
        ></input>
        <button
          className="search-btn"
          
        >
          Search
        </button>
    </div>
  )
}

export default Navbar