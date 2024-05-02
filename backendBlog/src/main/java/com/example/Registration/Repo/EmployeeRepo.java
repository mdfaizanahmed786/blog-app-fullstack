package com.example.Registration.Repo;
import com.example.Registration.Entity.Employee;
import com.example.Registration.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;
@EnableJpaRepositories
@Repository
public interface EmployeeRepo extends JpaRepository<Employee,Integer>
{
    Optional<Employee> findOneByEmailAndPassword(String email, String password);
    Employee findByEmail(String email);
}