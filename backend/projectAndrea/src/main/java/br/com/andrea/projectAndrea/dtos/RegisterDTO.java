package br.com.andrea.projectAndrea.dtos;

import br.com.andrea.projectAndrea.enums.UserRole;

public record RegisterDTO(String name, String surname, String email, String password, String profilePicturePath, UserRole role) {

}
