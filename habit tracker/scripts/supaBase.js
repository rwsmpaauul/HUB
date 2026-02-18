import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseURL = 'https://xxegitaqnudhmrkbyxyl.supabase.co';
const supabaseKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4ZWdpdGFxbnVkaG1ya2J5eHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MTA0ODUsImV4cCI6MjA4Njk4NjQ4NX0.lOvRgHu8c6Z4VWw9yYzvfUn6puF81wPIClT6gfSD5_8'

export const supabase = createClient(supabaseURL, supabaseKEY);

export async function saveToCloud() {
    const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
    const status = Array.from(checkboxes).map(cb => cb.checked);

    const { error } = await supabase
        .from('habits')
        .upsert(
            {
                id: 1, states: status,
                user_id: '00000000-0000-0000-0000-000000000000'
            },
            { onConflict: 'id' }
        )

    if (error) console.error('Fehler beim Speichern:', error);
}

export async function readFromCloud() {
    const { data, error } = await supabase
        .from('habits')
        .select('states')
        .eq('id', 1)
        .maybeSingle();

    if (data && data.states) {
        const checkboxes = document.querySelectorAll('table input[type="checkbox"]');
        checkboxes.forEach((cb, index) => {
            if (data.states[index] !== undefined) {
                cb.checked = data.states[index];
            }
        })
    }
    if (error) console.error('Fehler beim Auslesen:', error);
}
