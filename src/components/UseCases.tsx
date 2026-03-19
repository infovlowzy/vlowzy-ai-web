import { Card } from "@/components/ui/card";
import { GraduationCap, Hotel, Building2 } from "lucide-react";

export const UseCases = () => {
  const cases = [
    {
      icon: GraduationCap,
      industry: "Konsultan Pendidikan Luar Negeri",
      title: "Chatbot dan Otomasi Lead Qualification & Follow-up",
      challenge: "Ratusan inquiry calon siswa setiap hari sulit dikelola, terutama banyaknya calon siswa yang tidak serius.",
      solution: "AI Chat Agent dirancang untuk membantu proses screening calon siswa secara otomatis. Sistem dapat menjawab pertanyaan calon siswa secara detail, menilai tingkat keseriusan mereka, dan mengarahkan (assign) siswa ke admin atau konselor yang sesuai dengan negara tujuan bila diperlukan. Setelah siswa memutuskan universitas pilihannya, sistem juga akan melakukan auto follow-up dan pengingat dokumen secara otomatis, mulai dari persyaratan visa, edukasi, hingga dokumen administratif lainnya, tanpa perlu campur tangan manusia.",
      results: ["60% waktu admin berkurang", "3x lebih banyak qualified leads", "100% response rate"],
    },
    {
      icon: Hotel,
      industry: "Hospitality",
      title: "AI Voice Agent Room Assistant",
      challenge: "Tamu sering menunggu dengan lama untuk menerima layanan telfon room service karena banyaknya telfon pada waktu yang bersamaan.",
      solution: "Voice-activated AI Agent yang tersedia 24/7 di setiap kamar hotel, memungkinkan tamu untuk menelpon dan melakukan permintaan seperti housekeeping, perlengkapan kamar mandi, atau informasi fasilitas hanya dengan berbicara dengan robot yang menyerupai manusia, tanpa perlu menunggu staf.",
      results: ["100% availability", "40% peningkatan kepuasan tamu", "Pengurangan workload staff"],
    },
    {
      icon: Building2,
      industry: "Sports",
      title: "Chatbot dengan fitur Smart Scheduling dan Reminder System",
      challenge: "Banyak pekerjaan sederhana yang seharusnya bisa diotomatisasi masih dikerjakan secara manual, sehingga membuang waktu, tenaga, dan biaya operasional.",
      solution: "AI Chat Agent yang mampu menangani berbagai kebutuhan pelanggan — mulai dari menjawab pertanyaan, mengecek jadwal, memproses transaksi, hingga memverifikasi bukti pembayaran. Untuk meningkatkan pengalaman pelanggan, sistem akan mengirimkan reminder dan pesan sambutan satu jam sebelum kedatangan, serta pesan terima kasih dan penawaran promo khusus setelah sesi olahraga selesai.",
      results: ["Respons pelanggan lebih cepat hingga 3x", "Peningkatan loyalitas pelanggan melalui personalisasi interaksi", "Mengurangi human error dalam proses penjadwalan", "70% peningkatan efisiensi operasional"],
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Studi Kasus
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kisah Sukses <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Studi kasus nyata dari berbagai industri yang telah menggunakan Vlowzy
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {cases.map((useCase, index) => (
            <Card
              key={index}
              className="p-8 bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="p-5 rounded-2xl bg-primary/10">
                    <useCase.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="text-sm font-medium text-primary mb-2">{useCase.industry}</div>
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{useCase.title}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Tantangan</h4>
                      <p className="text-foreground leading-relaxed">{useCase.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-2">Solusi</h4>
                      <p className="text-foreground leading-relaxed">{useCase.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase mb-3">Hasil</h4>
                    <div className="flex flex-wrap gap-3">
                      {useCase.results.map((result, idx) => (
                        <div key={idx} className="px-4 py-2 rounded-full bg-primary/10 text-sm text-primary font-medium">
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
