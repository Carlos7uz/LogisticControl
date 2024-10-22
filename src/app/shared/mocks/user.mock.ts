import { User } from "../../core/interfaces/user.interface";

export const USER_MOCK: {users: User[]} = {
  "users": [
    {
      "uuid": "0558ab2a-3bd7-40d3-9750-fa6c17f3a6e9",
      "userName": "gustavo.rodrigues",
      "email": "gustavo.rodrigues@grupomadero.com.br",
      "isActive": true,
      "role": [
        {
          "uuid": "89366009-9c7a-45d9-aca2-aa448fe38dbd",
          "name": "Admin",
          "description": "Administra o sistema e gerencia usuários e permissões"
        }
      ]
    }
  ]
}
