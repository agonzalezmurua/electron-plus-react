// import original module declarations
import 'styled-components'

type ColorType = {
  100: string,
  200: string,
  300: string,
  400: string,
  500: string
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {    
    colors: {
      accent: ColorType
      secondary: ColorType
      white: ColorType
    }
  }
}