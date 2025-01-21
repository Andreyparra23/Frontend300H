import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";
// importar el proveedor para hacer peticiones HTTP
import { provideHttpClient } from "@angular/common/http";
// IMPORTAR HERRAMIENTAS QUE PERMITAN SIMULAR INTERACIONES CON MIS PETICIONES HTTP
import { provideHttpClientTesting, HttpTestingController } from "@angular/common/http/testing";

describe('pruebas para servicio login', () => {
  

  

  let _loginService: LoginService;
  let _httpMock: HttpTestingController;
  const urlTest = "http://localhost:9000/iniciarSesion/";
  const emailTest = "ejemplocorreo@gmail.com";
  const passwordTest = "123";
  const tokenTest = "asdfghjkl1234567890"

  beforeEach(()=>{
    TestBed.configureTestingModule({
        providers: [
            LoginService,
            provideHttpClient(),
            provideHttpClientTesting()
        ]
    });

    _loginService = TestBed.inject(LoginService);
    _httpMock = TestBed.inject(HttpTestingController);
})

afterAll(()=>{
  _httpMock.verify();  
});


// caso de prueba 1
it('Debería hacer una petición POST para iniciar sesión',()=>{
  const mockRespuesta = { //simular la respuesta que devolvería el backend
      mensaje: 'Inicio de sesión exitoso',
      token: tokenTest
  }

  _loginService.inicioSesion(emailTest, passwordTest ).subscribe(
      (res)=>{
          expect(res).toEqual(mockRespuesta);
      }
  )

  
  const peticion = _httpMock.expectOne(urlTest)

  expect(peticion.request.method).toBe('POST')

  // IMPORTANTE: ESTO ES LO QUE SIMULA la respuesta DEL SERVIDOR
  peticion.flush(mockRespuesta)
 
});
// caso de prueba 2
it('Debería obtener el token almacenado en el localStorage',()=>{
  localStorage.setItem('token', tokenTest) //esto es lo que estoy guardando en el localStorage
  expect(_loginService.obtenerToken()).toBe(tokenTest);
});

// caso de prueba 3
it('Debería verificar si el usuario está logueado',()=>{
  // tenemos token
  localStorage.setItem('token', tokenTest)
  expect(_loginService.estaLogueado ()).toBeTrue();//respuesta buleana verdad
});

// caso de prueba 4
it('Debería cerrar sesión',()=>{
  _loginService.cierreSesion();
  expect(localStorage.getItem('token')).toBeNull(); 
  //Si cierro sesión elimino localStormage, si quiero acceder a localStorage, me debe devolver null
});   

})