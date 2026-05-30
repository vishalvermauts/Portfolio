import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import data from "../../data/portfolioData.json";
import { useEffect } from "react";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = data.projects.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center bg-white p-12">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate("/projects")} className="flex items-center gap-2 text-[#141313] font-bold border-b-2 border-black pb-1 hover:text-gray-600">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <section className="flex flex-1 flex-col bg-white overflow-y-auto">
      <div className="px-12 py-10 lg:px-20 max-w-4xl">
        <button onClick={() => navigate("/projects")} className="flex items-center gap-2 text-[#141313] font-bold mb-12 hover:text-gray-600 transition-colors w-fit border-b border-transparent hover:border-gray-600 pb-0.5">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </button>

        <h1 className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[48px] lg:text-[64px] font-bold leading-[1.1] text-[#141313] uppercase tracking-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-10">
          {project.stack.map((tech, i) => (
            <span key={i} className="bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] px-4 py-1.5 text-[14px] font-bold text-white rounded-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-12">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noreferrer" 
            className="group inline-flex items-center gap-3 bg-[#141313] px-6 py-4 text-white hover:bg-black transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="[font-family:'IBM_Plex_Sans',Helvetica] text-[14px] font-medium">View Repository</span>
            <div className="bg-gradient-to-r from-[#ffb147] via-[#ff6c63] to-[#b86adf] p-1">
              <ArrowUpRight className="h-4 w-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </a>
        </div>

        <div className="prose prose-lg max-w-none">
          {(project as any).richDetails ? (
            (project as any).richDetails.map((section: any, idx: number) => {
              switch (section.type) {
                case 'h3':
                  return <h3 key={idx} className={`text-[24px] font-bold text-[#141313] mb-6 ${idx !== 0 ? 'mt-12' : ''} border-b border-[#141313]/10 pb-2 uppercase`}>{section.content}</h3>;
                case 'p':
                  return <p key={idx} className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[16px] leading-[1.8] text-[#141313]/80">{section.content}</p>;
                case 'img':
                  return (
                    <div key={idx} className="my-10 p-1 bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] rounded-xl shadow-xl w-full max-w-4xl mx-auto">
                      <div className="bg-white rounded-lg overflow-hidden border-2 border-transparent">
                        <img src={section.content} alt="Project visual" className="w-full h-auto object-cover rounded-md" />
                      </div>
                    </div>
                  );
                case 'ul':
                  return (
                    <ul key={idx} className="list-disc pl-6 mb-8 space-y-3">
                      {section.content.map((li: string, i: number) => (
                        <li key={i} className="[font-family:'IBM_Plex_Sans',Helvetica] text-[16px] leading-[1.8] text-[#141313]/80">
                          <span dangerouslySetInnerHTML={{ __html: li.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        </li>
                      ))}
                    </ul>
                  );
                case 'table':
                  return (
                    <div key={idx} className="overflow-x-auto mb-10 mt-6 border border-[#141313]/10 rounded-lg shadow-sm">
                      <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-[#141313]/10">
                          <tr>
                            {section.headers.map((h: string, i: number) => (
                              <th key={i} className="px-6 py-4 text-[14px] font-bold uppercase tracking-wider text-[#141313]">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#141313]/5 bg-white">
                          {section.rows.map((row: string[], rIdx: number) => (
                            <tr key={rIdx} className="hover:bg-gray-50/50 transition-colors">
                              {row.map((cell: string, cIdx: number) => (
                                <td key={cIdx} className={`px-6 py-4 text-[15px] [font-family:'IBM_Plex_Sans',Helvetica] ${cIdx === 0 ? 'font-bold text-[#141313]' : 'text-[#141313]/80'}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                default:
                  return null;
              }
            })
          ) : (
            <>
              <h2 className="text-[24px] font-bold text-[#141313] mb-6 border-b border-[#141313]/10 pb-2 uppercase">How It Works</h2>
              {project.details.map((paragraph, index) => (
                <p key={index} className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[16px] leading-[1.8] text-[#141313]/80">
                  {paragraph}
                </p>
              ))}
            </>
          )}
        </div>

        {(project as any).screenshots && (project as any).screenshots.length > 0 && (
          <div className="mt-16">
            <h2 className="text-[24px] font-bold text-[#141313] mb-8 border-b border-[#141313]/10 pb-2 uppercase">Live Demo Previews</h2>
            <div className="space-y-12">
              {(project as any).screenshots.map((img: string, idx: number) => (
                <div key={idx} className="p-1 bg-gradient-to-r from-[#b86adf] via-[#ff6c63] to-[#ffb147] rounded-xl shadow-2xl">
                  <div className="bg-white rounded-lg overflow-hidden border-2 border-transparent">
                    <img src={img} alt={`Preview ${idx + 1}`} className="w-full h-auto object-cover rounded-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {(project as any).conclusion && (
          <div className="mt-16 prose prose-lg max-w-none">
            <h2 className="text-[24px] font-bold text-[#141313] mb-6 border-b border-[#141313]/10 pb-2 uppercase">Impact & Takeaways</h2>
            <p className="mb-6 [font-family:'IBM_Plex_Sans',Helvetica] text-[16px] leading-[1.8] text-[#141313]/80">
              {(project as any).conclusion}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
