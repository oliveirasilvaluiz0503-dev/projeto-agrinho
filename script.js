package com.agroforte.sustentavel.controller;

import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/sustentabilidade")
@CrossOrigin(origins = "*") // Permite que o frontend acesse o backend facilmente
public class AgroController {

    @PostMapping("/calcular")
    public Map<String, Object> calcularImpactoVerde(@RequestBody PropriedadeRequest request) {
        Map<String, Object> response = new HashMap<>();
        
        // Regra de negócio em Java: Cálculo de balanço sustentável
        double totalHectares = request.getHectares();
        double reservaLegalRecomendada = totalHectares * 0.20; // 20% de base sustentável
        double potencialCreditoCarbonoEstimado = totalHectares * 1.5; // Estimativa fictícia de créditos

        response.put("produtor", request.getNome());
        response.put("hectaresTotais", totalHectares);
        String msg = String.format("Área de preservação recomendada: %.2f hectares.", reservaLegalRecomendada);
        response.put("mensagemPreservacao", msg);
        response.put("creditosCarbonoEstimados", potencialCreditoCarbonoEstimado);
        response.put("status", "Sucesso - Dados Processados no Servidor Java");

        return response;
    }
}

// Classe DTO (Data Transfer Object) para receber os dados do front
class PropriedadeRequest {
    private String nome;
    private double hectares;

    // Getters e Setters
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    public double getHectares() { return hectares; }
    public void setHectares(double hectares) { this.hectares = hectares; }
}
