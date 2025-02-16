package spectra.sos.api.account.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Table(name = "`t_account`")
@NoArgsConstructor
public class Account {

    @Id
    private String id;

    private String pwd;

    @Builder
    public Account(String id, String pwd) {
        this.id = id;
        this.pwd = pwd;
    }
}
