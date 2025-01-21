import { TestBed } from '@angular/core/testing';
import { UsuariosModel } from '../interfaces/usuarios-model';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [UserService] });
    service = TestBed.inject(UserService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
