package com.tamnara.backend.summary.controller;

import com.tamnara.backend.summary.service.SummaryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/summary")
public class SummaryController {
    private final SummaryService summaryService;

    public SummaryController(SummaryService summaryService) {
        this.summaryService = summaryService;
    }

    @PostMapping
    public ResponseEntity<String> summarize(@RequestBody String text) {
        String result = summaryService.generateSummary(text);
        return ResponseEntity.ok(result);
    }
}
