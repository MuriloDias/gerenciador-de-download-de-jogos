export class WebStorage {
    static navegadorSuportaWebStorage(): boolean {
      try {
        const chaveDeTeste = "teste";
        localStorage.setItem(chaveDeTeste, chaveDeTeste);
        localStorage.removeItem(chaveDeTeste);
        return true;
      } catch (e) {
        return false;
      }
    }
  
    salvarNoWebStorage(key: string, value: string): void {
      if (WebStorage.navegadorSuportaWebStorage()) {
        localStorage.setItem(key, value);
      } else {
        console.error("WebStorage não é suportado no seu navegador.");
      }
    }

    salvarObjetoNoWebStorage(key: string, value: any): void {
      if (WebStorage.navegadorSuportaWebStorage()) {
        let json = JSON.stringify(value);
        localStorage.setItem(key, json);
      } else {
        console.error("WebStorage não é suportado no seu navegador.");
      }
    }
  
    consultarNoWebStorage(key: string): string | null {
      if (WebStorage.navegadorSuportaWebStorage()) {
        return localStorage.getItem(key);
      } else {
        console.error("WebStorage não é suportado no seu navegador.");
        return null;
      }
    }

    consultarObjetoNoWebStorage(key: string): any | null {
      if (WebStorage.navegadorSuportaWebStorage()) {
        let json = localStorage.getItem(key);
        let objeto;
        if(json != null){
          objeto = JSON.parse(json);
        }
        return objeto;
      } else {
        console.error("WebStorage não é suportado no seu navegador.");
        return null;
      }
    }
  }
  

// Exemplo de uso
//WebStorage.saveToLocalStorage("chave", "value");
//const chaveSalva = WebStorage.getFromLocalStorage("chave");
//console.log(nomeSalvo); // Saída: "value"