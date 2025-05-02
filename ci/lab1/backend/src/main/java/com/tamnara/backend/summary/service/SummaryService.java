package com.tamnara.backend.summary.service;

import com.tamnara.backend.summary.repository.SummaryRepository;
import org.springframework.stereotype.Service;

@Service
public class SummaryService {
    private final SummaryRepository summaryRepository;

    public SummaryService(SummaryRepository summaryRepository) {
        this.summaryRepository = summaryRepository;
    }

    public String generateSummary(String text) {
        return "요약 결과: " + text.substring(0, Math.min(5, text.length())) + "...";
    }
}
