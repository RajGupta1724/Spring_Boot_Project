package developer.raj.emp_project;

import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@CrossOrigin("http://localhost:3000/")
public class EmpController {

    //  EmployeeService employeeService=new EmployeeServiceImpl();

    //dependency injection
    @Autowired
    EmployeeService employeeService;

    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    }

    @GetMapping("employees/{id}")
    public Employee getAllEmployeesById(@PathVariable Long id) {
        System.out.println("yes, id is fetching...");
        return employeeService.readEmployee(id);
    }

    // @PostMapping("employees")
    // public String createEmployee(@RequestBody Employee employee) {
    //     // employees.add(employee);
    //   return employeeService.createEmployee(employee);
    //     // return "Saved successfully";
    // } 
    @PostMapping("employees")
public ResponseEntity<String> createEmployee(@RequestBody Employee employee) {
    String result = employeeService.createEmployee(employee);
    if (result.equals("Saved successfully")) {
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    } else {
        return new ResponseEntity<>(result, HttpStatus.CONFLICT);
    }
}


    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id))
            return "Delete successfully";
        return "Not found";    
    }

//     public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
//     try {
//         boolean deleted = employeeService.deleteEmployee(id);
//         if (deleted) {
//             return ResponseEntity.ok("Deleted successfully");
//         } else {
//             return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Employee not found");
//         }
//     } catch (Exception e) {
//         e.printStackTrace(); // Optional: log more details
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Server error occurred while deleting employee");
//     }
// }
    
    @PutMapping("employees/{id}")
    public String putMethodName(@PathVariable Long id, @RequestBody Employee employee) {
       
        return employeeService.updateEmployee(id, employee);
    }
}
