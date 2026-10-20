// ===================================================================
// A "MOLDURA" que envolve todas as telas do app 
// ===================================================================

// CONCEITO: import
// "Import" traz para cá uma ferramenta que outra pessoa já criou!!

// Stack: "pilha de telas". Quando o app tem várias telas, uma abre por cima por cima da outra, como cartas empilhadas. Vem do pacote expo-router.
import { Stack } from "expo-router";
import { HeaderShownContext } from "expo-router/build/react-navigation";

// StatusBar = a barra lá em cima do celular (relógio, bateria, sinal)
import { StatusBar } from "expo-status-bar"

// CONCEITO
// NO React native, cada pedaço de tela é um componente.
// UM COMPONENTE é só um FUNÇÃO que devolve (return) o que aparece.

// essa função default é a função principal deste arquivo, é assim que o Expor Router encontra o layout
export default function layout() {
    return(
        <>
            {/*StatusBar style="light" deixa o relógio e bateria brancos*/}
            <StatusBar style="light"/>
            {/*Stack: a pilha de telas*/}
            {/*screenOptions: opções que valem para todas telas*/}
            {/*headerShown: esconde a barra de titulo que o expo coloca no topo por padrão */}
            <StatusBar screenOptions={{ headerShown: false}}/>
        </>
        
    )
};