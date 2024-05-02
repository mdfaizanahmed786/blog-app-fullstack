package com.example.Registration.Service;
import com.example.Registration.Dto.EmployeeDTO;
import com.example.Registration.Dto.LoginDTO;

import com.example.Registration.response.LoginResponse;

public interface EmployeeService {
    String addEmployee(EmployeeDTO employeeDTO);
    LoginResponse loginEmployee(LoginDTO loginDTO);
}